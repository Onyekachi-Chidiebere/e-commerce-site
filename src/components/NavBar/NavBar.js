import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import {ShoppingCart} from '@material-ui/icons'
import store,{categorizeProduct} from './../../redux/redux';
import {connect} from 'react-redux';
import './NavBar.css'




const NavBar = props =>{ 
const [category, setCategory]= useState('')
const [search,setSearch]=useState('')
console.log({category})
const handleCategorize =(cat)=>{
  console.log({cat})
  store.dispatch(categorizeProduct(cat))
}
  return (
  <header className='NavBar'>
    <nav className='Navigation'>
      <div className='Logo'>
        <NavLink to="/">
          <img src={Logo} />
        </NavLink>
      </div>
      <div className='menu'>
      <select onChange={(e)=>{
      console.log({value:e.target.value});
      setCategory(e.target.value);
      handleCategorize(e.target.value)}} >
        <option value='all'>All</option>
        <option value='cloth'>Cloth</option>
        <option Value='shoe'>Shoe</option>
        <option value='phone'>Phone</option>
        <option value='watch'>Watch</option>
      </select>
      <span><input placeholder='Search'/><button>search</button></span>
      <div id='cart-container'>
        <ShoppingCart className='icon'/>
        <span className='number'>{props.cart.length}</span>
      </div>
      </div>
    </nav>
  </header>
);}

const mapStateToProp = state =>({
  cart:state.cart
})
export default connect(mapStateToProp)(NavBar) ;
