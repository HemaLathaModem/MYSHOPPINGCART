import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Login.css';
import axios from 'axios';
import couponsanddeals from './Images/couponsanddeals.png';
class Navbar extends Component {
    constructor(props){
        super(props)
        this.state=
        {
          username :'',
          password :'',
          errors: {}
        }
      }
    
      handleUsername(value)
      {
        console.log("username"+value)
        this.setState({username:value})
      }
      handlePassword(value)
      {
        console.log("password is"+value)
        this.setState({password:value})
      }
    
    
    
      state = {
        open: false
      };
      
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

      Login = () => {
        //    console.log("data is"+input)
            return (axios.get('http://localhost:8080/findByUserName/' + this.state.username, { headers: { 'content-type': 'application/json' } }).
                then(res =>{
                  
                    
                        
                      this.setState({
                          username: res.data.username,
                          password:res.data.password                                })
                                  
                  console.log("my result.." + JSON.stringify(res))
                  console.log("username"+JSON.stringify(res.data.username));
                  console.log("username"+JSON.stringify(res.data.username));
                  
                }))
               
          }
      
    render() {
        const  { open } = this.state;

 
        this.props.cartUpdated();
 
        let total = 0;
 
        this.props.cart.map(item => total += item.product.price * item.quantity);
 
        return (
 
            <nav className="navbar navbar-default">              
                <div className="container-fluid">                  
                    <div className="navbar-header">                    
                        <NavLink className="navbar-brand" to="/">Home</NavLink>
                        <NavLink className="navbar-brand" to="/news">News</NavLink>
                        <NavLink className="navbar-brand" to="/about">About Us</NavLink>
                    </div>
 
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                        <li> <span>
 <button className="navbar-brand" id="button" onClick={this.onOpenModal}>Login/SignUp</button></span>
         
          
            <Modal open={open} onClose={this.onCloseModal}>
            <form  className="frm" >
          <h4>Login</h4>
          <div className='form-group row'>
            <input className='input' type='text' name='username' placeholder="Enter UserName" onChange= {(e)=>{this.handleUsername(e.target.value)}} required/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' name='password' placeholder="Enter Password" onChange= {(e)=>{this.handlePassword(e.target.value)}} required/>
          </div>
          <div className='form-group row'>
            <button className='btn' onClick={()=>{this.Login()}} >Login</button>
          </div>
          
        </form>
         
        </Modal></li>
 
                            <li><NavLink to="/my-cart">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">{ this.props.cart.length } items: (&#8377;{total.toFixed(2)})</span>
                                    ) : null
                                }
                                <i className="glyphicon glyphicon-shopping-cart"></i> My Cart</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};
 
export default connect(mapStateToProps)(Navbar);