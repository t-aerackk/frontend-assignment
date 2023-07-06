import React from 'react'
import { FaCartPlus, FaUser, FaSearch, FaHome} from 'react-icons/fa';
import {Link} from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  return (
    <div className="Navbar">
    <div className="links"></div>
    <ul>
            <Link to ="/"><FaHome/></Link>
            <Link to ="/about">About Us</Link>
            <Link to ="/products">Our Products</Link>
            <Link to ="/">HyperAce</Link>
            <Link to ="/search"><FaSearch/></Link>
            <Link to ="cart"><FaCartPlus />2</Link>
            <Link to ="/"><FaUser/></Link>
            </ul>  
            
            

    </div>
  )
}

export default Navbar
