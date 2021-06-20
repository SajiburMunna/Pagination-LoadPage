import React from 'react'
import './Product.css';
const Product = (props) => {

    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className="container">
        <div className="product" >
       
        <div>  <img src={img} alt=""/> </div>
        <div>
         <h4 className="product-name"> {name}   </h4>
         <br/>
      <p><small>by:{seller}</small></p>
         <p><small>${price}</small></p>
         <p><small>Only {stock} left in stock -oder soon</small></p>
         
        
         </div>
            
        </div>
        </div>
    )
}

export default Product
