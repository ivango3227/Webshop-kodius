import React from "react";
import Product from "./Product";
import products from "../products.js";

function ProductList(props) {

    return (
        <div>

            <div className="title-div">
                <h1>All products</h1>
            </div>
            <div className="products-list">
                {products.map(product =>
                    <Product
                        handleAddProduct={props.handleAddProduct}
                        product={product}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductList;