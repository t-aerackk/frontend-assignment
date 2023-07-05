import React from 'react'
import { PRODUCT } from '../../product';

const Products = (props) => {
  const { products }= props;
  return (
    <div className="Products">
      <div className="titlePage">
      <h1>HyperVerse Store</h1>
      </div>
      <div className="items">
      </div>
    </div>
  )
}

export default Products;
