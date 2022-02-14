import React, { useState } from "react";
import { BrowserRouter as Router,  NavLink } from "react-router-dom";

function ProductCart({ cartItems, handleAddProduct ,handleRemoveProduct,handleProceedToCheckout }) {
   
    const totalPrice=(cartItems.reduce((price,item)=>price+item.quantity *item.price,0)).toFixed(2);
    
    return (
        <div className="cart">
            <h1>My cart</h1>
            <div className="cart-box">
                {cartItems.length === 0 && <h1>Your cart is empty!</h1>}
                {cartItems.map((item) =>
                    <div className="cart-item">
                        <img src={item.imageSource} />
                        <p>{item.name}</p>
                        <p>{item.price} EUR</p>
                        <div className="add-quantity">
                            <button onClick={()=>handleRemoveProduct(item)}>-</button>
                            <input  type="number" placeholder="quantity" value={item.quantity} />
                            <button onClick={()=>handleAddProduct(item)}>+</button>
                            <div> 
                                 {(item.quantity * item.price).toFixed(2) } EUR
                            </div> 
                        </div>
                    </div>

                )} 
                     <div className="total-price-div">
                      {cartItems.length !=0 && (
                          <div>
                            <p>Total price: {totalPrice} EUR</p>
                            <NavLink to="/checkout" >
                            <button onClick={()=>handleProceedToCheckout(cartItems,totalPrice)}>Proceed to Checkout</button>
                            </NavLink>
                          </div>
                      )}

                     </div>
            </div>
        </div>
    );
}

export default ProductCart;