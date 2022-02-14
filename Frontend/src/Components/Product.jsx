import React, {useState} from "react";

function Product(props){
 
  return (
    <div className="card">
      <img src={props.product.imageSource} alt="product image" />
      <p>{props.product.name}</p>
      <p>{props.product.price} EUR </p>
      <div>
        <button onClick={()=>props.handleAddProduct(props.product)} type="button">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;