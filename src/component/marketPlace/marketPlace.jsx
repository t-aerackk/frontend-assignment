import React, { useEffect, useState } from 'react'
// import Products from '../../pages/products/products'
import Cart from '../../pages/cart/cart';

import './market.css';
import Navbar from '../nav/navbar';
const MarketPlace = () => {
    const [products, setProduct] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [count,setCount] = useState(0)
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://fakestoreapi.com/products')
            // console.log(response)
            const result = await response.json()
            console.log("result", result)
            setProduct(result)
        }

        fetchData()
    }, [])

    const onAddToCart = product => {
        // Add the product to the cart state
        setCartItems([...cartItems, product]);
        const data = cartItems.map((obj) => obj );
        localStorage.setItem("cartitem",JSON.stringify(data));
         const price = cartItems.map( (obj) => obj.price)
         localStorage.setItem('price',price)
      };



      const cartdata = cartItems.map( (data) => data)
      localStorage.setItem('cartproduct',cartdata)
    return (
        <div className="product-container">
            <div className="container text-center">
                <div className="row row-cols-4">
                    {products.map((item) => (
                        <div className="col my-2" key={item.id}>
                            <div className="card h-100">
                                <div className="image-container">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.title}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <p className="details">{item.description}</p>
                                    <a href="#" className="btn btn-primary" onClick={() => onAddToCart(item)}>
                                        Add To Cart 
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                </div>
                );
  };

export default MarketPlace