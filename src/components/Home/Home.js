import React, { Component } from "react";
import "./Home.css";
import Luggage from "./../../assets/img/luggage.jpg";
import {Link} from 'react-router-dom';

 const Home = () => {
    return (
      <div className='Container'>
        <img src={Luggage} alt="home" className='Img' />
        <div className='Overlay' />
        <div className='Headding'>
          <h1 className='Title'>
            Thoughtful standards for modern travel
          </h1>
            <button className='Btn'><Link to='/Products'>shop now</Link></button>
        </div>
      </div>
    );
  }
export default Home;
