import React, { Component } from "react";
import store,{removeFromCart} from './../../redux/redux';
import {DeleteForever} from '@material-ui/icons'
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
              <th>{`GRAND TOTAL $${price}`}</th>
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
              <td className='card'>
                <img className='img' src={product.image}/>
              </td>
              <td className='card'>{product.title}</td>
              <td className='card'>{`$${product.price}`}</td>
              <td className='card'>{product.quantity}</td>
              <td className='card'>{`$${product.quantity*product.price}`}
              </td>
              <td>
              <DeleteForever className='del' onClick={()=>{handleDeleteProduct(product)}}/>
              </td>
            </tr>
          ))}
          </tbody>
          
        </table>
      </div>
    );
}
const mapStateToProp = state =>({
  cart:state.cart
})
export default connect(mapStateToProp)(Cart) ;