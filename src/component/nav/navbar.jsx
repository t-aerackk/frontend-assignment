import React from 'react'
import {Link} from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  return (
    <div className="Navbar">
    <div className="links"></div>
            <Link to ="/">Home</Link>
            <Link to ="/about">About Us</Link>
            <Link to ="/products">Our Products</Link>
            <Link to ="/">HyperAce</Link>
            <Link to ="/search">Search</Link>
            <Link to ="cart">Cart</Link>
            <Link to ="/">My Profile</Link>
            
            

    </div>
  )
}

export default Navbar
