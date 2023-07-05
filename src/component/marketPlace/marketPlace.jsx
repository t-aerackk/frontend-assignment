import React, { useEffect, useState } from 'react'
import Products from '../../pages/products/products'

const MarketPlace = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://fakestoreapi.com/products')
            // console.log(response)
            const result = await response.json()
            console.log("result", result)
            setProduct(result)
        }

        fetchData()
    },[])
    
  return (
    <div>

        {
            product.map((item, index)=>{
                return(
                    <div key={index}>
                        {item.title}

                    </div>
                )
            })

        }
        <Products/>
    </div>
  )
}

export default MarketPlace