import { json } from "react-router-dom";
import products from "../products/products";

const Cart = (props) => {
  const d = localStorage.getItem("cartitem");
  const obj = JSON.parse(d);


  // console.log(d)


  return (
    <div>
    <h1>Cart</h1>

  {obj.map( (product)=>
    <div className="container">
    <div className="card" >
    <img className="card-img-top" src={product.image} alt="Card image cap" width={200} height={200}/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="#" className="btn btn-primary">ChecOut</a>
    </div>
  </div>
    </div>
  )}
  
 
    </div>
  )
}

export default Cart