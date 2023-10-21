import React from "react";
import "./shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <div className="Shop">
      <div className="heading">Choose & Get!</div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}

        {/*
         Here, 
        PRODUCTS -> File created in product.js. All information is stored there. We will just run a loop 
        product -> each of the data (id,productName,price,productImage) 
        Product data -> product.jsx 's   information 
        data={product} : props to display all of the products 
        */}
      </div>
    </div>
  );
};
