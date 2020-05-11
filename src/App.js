import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";
import News from './components/News';
import AboutUs from './components/AboutUs';
 
function App(props) {
 
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>

             <Route exact path="/" component={ProductList} />
             <Route path="/news"  component={News}/>
             <Route path="/about" component={AboutUs}/>
             <Route path="/my-cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}
 
export default App;