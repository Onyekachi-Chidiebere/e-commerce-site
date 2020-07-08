import React, { Component } from "react";
import store,{removeFromCart} from './../../redux/redux';
import {connect} from 'react-redux';
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
      <div>
        <table>
          <thead>
            <th>photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </thead>
          {props.cart.map((product)=>(
            <tr key={product.id}>
              <td><img src={product.image}/></td>
              <td>{product.title}</td>
              <td>{`$${product.price}`}</td>
              <td>{product.quantity}</td>
              <td>{`$${product.quantity*product.price}`}
              </td>
              <td>
                <button onClick={()=>{handleDeleteProduct(product)}}>Remove</button>
              </td>
            </tr>
          ))}
        </table>
        <div>{`$${price}`}</div>
      </div>
    );
}
const mapStateToProp = state =>({
  cart:state.cart
})
export default connect(mapStateToProp)(Cart) ;