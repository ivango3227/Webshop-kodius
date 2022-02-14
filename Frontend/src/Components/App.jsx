import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";
import Footer from "./Footer";
import Checkout from "./Checkout";
import SuccessPage from "./SuccessPage";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [order,setOrder]=useState({
    products:[],
    totalPrice:0,
    userInfo:{}
  });
  
  
  function handleAddProduct(product) {
    const productExists = cartItems.find((item) => item.key === product.key);
    if (productExists) {
      setCartItems(cartItems.map((item) =>
        item.key === product.key ?
          { ...productExists, quantity: productExists.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product) {
    const productExists = cartItems.find((item) => item.key === product.key);
    if (productExists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.key !== product.key));
    } else {
      setCartItems(cartItems.map((item) =>
        item.key === product.key ?
          { ...productExists, quantity: productExists.quantity - 1 } : item));
    }
  }

  function handleProceedToCheckout(cartItems,totalPrice) {
     setOrder((prevState)=>{
       return{
         ...prevState,
         products:cartItems,
         totalPrice:totalPrice
       }
     });
  }

  function submitUserInfo(userInfo){
       setOrder((prevState)=>{
         return{
           ...prevState,
           userInfo:userInfo
         };
       });
       axios.post("http://localhost:9000/api/order/add",order)
       .catch((err)=>console.log(err));
       setCartItems([]);
       debugger;
  }
  
  return (
    <Router>
      <Header cartItems={cartItems} />
      <Main cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleProceedToCheckout={handleProceedToCheckout}
        submitUserInfo={submitUserInfo}

      />
      <Footer />
    </Router>
  );
}

function Main(props) {
  return (
    <Routes>
      <Route path="/" element={<ProductList handleAddProduct={props.handleAddProduct} />} />
      <Route path="/mycart" element={
        <ProductCart cartItems={props.cartItems}
          handleAddProduct={props.handleAddProduct}
          handleRemoveProduct={props.handleRemoveProduct}
          handleProceedToCheckout={props.handleProceedToCheckout}
        />
      } />
      <Route path="/checkout" element={<Checkout submitUserInfo={props.submitUserInfo} />} />
      <Route path="/successpage" element={<SuccessPage submitUserInfo={props.submitUserInfo} />} />
    </Routes>
  );
}


export default App;
