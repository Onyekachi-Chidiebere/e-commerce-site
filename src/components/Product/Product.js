import React, { useState,useEffect,Component } from "react";
import './Product.css'
import store,{addToCart} from './../../redux/redux';
import {connect} from 'react-redux';

 const Products=(props)=> {
   const handleUpdateCart=(product)=>{
      store.dispatch(addToCart(product))
      console.log(props.cart)
   }
 
    return (
      <div className='container'>
        {props.ProductList.map((product)=>(
            <span className='Card'>
            <div className='ImgContainer'>
              <img src={product.image} alt={product.title} className='Img' />
            </div>
            <h4 className='Title'>{product.title}</h4>
            <span className='Price'>{`$${product.price}`}</span>
            <button className='CartBtn'>
            <span onClick={()=>{handleUpdateCart(product)}}>ADD TO CART</span>
              </button>
          </span>
        ))}
      </div>
    );
}
const mapStateToProp = state =>({
  ProductList:state.ProductList,
  cart:state.cart
})
export default connect(mapStateToProp)(Products) ;