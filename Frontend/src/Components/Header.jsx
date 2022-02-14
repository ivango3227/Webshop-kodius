import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header(props){
    return (
      <header>
           <NavLink to="/">
             <button><h1>Webshop</h1></button> 
           </NavLink>

          <NavLink to="/mycart">
            <span> <button> My Cart {props.cartItems.length} <ShoppingCartIcon /> </button> </span> 
          </NavLink>
      </header>
    );
}
export default Header;