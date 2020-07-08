import React, { Component } from "react";
import store,{removeFromCart} from './../../redux/redux';
import {connect} from 'react-redux';
import './Cart.css'
const Cart =(props)=> {
  const handleDeleteProduct=(product)=>{
    console.log('from client')
    store.dispatch(removeFromCart(product))
    console.log(props.cart)
  }
    let price = 0
    props.cart.forEach((product)=>{
     price+=product.quantity*product.price
    })
    return (
      <div id='container'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {props.cart.map((product)=>(
            <tr key={product.id}>
              <td><div className='img'><img src={product.image}/></div></td>
              <td>{product.title}</td>
              <td>{`$${product.price}`}</td>
              <td>{product.quantity}</td>
              <td>{`$${product.quantity*product.price}`}
              </td>
              <td>
                <button onClick={()=>{handleDeleteProduct(product)}}>X</button>
              </td>
            </tr>
          ))}
          </tbody>
          
        </table>
        <div>{`$${price}`}</div>
      </div>
    );
}
const mapStateToProp = state =>({
  cart:state.cart
})
export default connect(mapStateToProp)(Cart) ;