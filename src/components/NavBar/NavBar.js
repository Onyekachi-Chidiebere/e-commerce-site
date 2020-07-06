import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import './NavBar.css'

const NavBar = props => (
  <header className='NavBar'>
    <nav className='Navigation'>
      <div className='Logo'>
        <NavLink to="/">
          <img src={Logo} />
        </NavLink>
      </div>
    </nav>
  </header>
);
export default NavBar;
