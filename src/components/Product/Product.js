import React, { Component } from "react";
import './Product.css'
import ProductList from '../ProductList/ProductList'
 const Products=()=> {
    return (
      <div>
        {ProductList.map((product)=>(
          <div className='Card'>
            <div className='ImgContainer'>
              <img src={product.image} alt={product.title} className='Img' />
            </div>
            <h4 className='Title'>{product.title}</h4>
            <span className='Price'>{`$${product.price}`}</span>
            <button className='CartBtn'>
            <span>ADD TO CART</span>
              </button>
          </div>
        ))}
      </div>
    );
}

export default Products;