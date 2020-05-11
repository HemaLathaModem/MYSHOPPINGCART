
import React,{Component} from "react";
class NewsCollection extends React.Component {
    constructor(props){
      super(props)
      this.state={
        news: [],
        url: '',
        toggle: 'top',
      }
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(org){
      if(org === 'toggle'){
        this.state.toggle === 'top'
        ? this.setState({toggle: 'latest'})
        : this.setState({toggle: 'top'})
      }
      
      let url = `https://newsapi.org/v1/articles?source=${org}&sortBy=${this.state.toggle}&apiKey=602c40a310164e8ba9aa96e0c34a0098`
      
      fetch(url, {method: "GET",})
      .then((res) => res.ok ? res.json() : '')
      .then((res) => this.setState({news: res.articles}))
    }
   
    render(){
      console.log(this.state.toggle)
      return(
        <div className='news-collection-main'>
          <div className='button-container'>
            <div className='buttons'>
              
             <div onClick={() => this.handleClick('bbc-news')}><img src='http://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/1.2.0/bbc_news_logo.png?cb=1' id="news" /></div>
             
              
            </div>
          </div>
          <div className='toggle-container'>
            <p>Top</p>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider' onClick={() => this.handleClick('toggle')}></span>
            </label>
            <p>Latest</p>
          </div>        
          <div className='news-collection-articles'>
            <News news={this.state.news} />
          </div>
        </div>
      )
    }
  }
  
  class News extends React.Component {
   
    render(){
      
      return(
        <div className='news-main'>
          <h1> Articles </h1>
          <ul>
            {this.props.news.map((article) =>
              <li>
                <a target='_blank' href={article.url}>
                  <h5>{article.title}</h5>
                  <img src={article.urlToImage} />
                  <div>{article.description}</div>
                </a>
              </li>
            )}
          </ul>
        </div>
      )
    }
  }
  
     
    export default NewsCollection;