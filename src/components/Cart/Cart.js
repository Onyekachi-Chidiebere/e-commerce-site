import React, { Component } from "react";
import Title from "./../Title/Title";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartTotals from "./CartTotals/CartTotals"
import classes from "./Cart.css";
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
              <td>{product.name}</td>
              <td>{product.price}</td>
              {/* <td>{product.quantity}</td> */}
            </tr>
          ))}
        </table>
      </div>
    );
}
