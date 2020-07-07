import React, { Component } from "react";
import {connect} from 'react-redux';
const Cart =(props)=> {
    return (
      <div>
        <table>
          <thead>
            <th>photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          {props.cart.map((product)=>(
            <tr>
              <td><img src={product.image}/></td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </table>
      </div>
    );
}
const mapStateToProp = state =>({
  cart:state.cart
})
export default connect(mapStateToProp)(Cart) ;