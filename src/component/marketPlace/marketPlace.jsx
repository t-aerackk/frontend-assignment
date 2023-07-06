import React, { useEffect, useState } from 'react'
// import Products from '../../pages/products/products'
import './market.css';

const MarketPlace = () => {
    const [products, setProduct] = useState([])

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
                                    <p className="card-text">{item.price}</p>
                                    <a href="#" className="btn btn-primary">
                                        Product Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <Products /> */}
                </div>
                </div>
                </div>
                );
  };

export default MarketPlace