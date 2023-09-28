import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../components/API";
import "../css_styling/productDetails.css"

export default function ProductDetails ({addToCart}){

    const {id} = useParams(); 

    const [productDetails,setProductDetails]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const productDetails= await fetchProductDetails(id); 
            console.log(productDetails);
            setProductDetails(productDetails);
        }
        fetchData();
      },[id]);

      const {title,image, price, description, rating}=productDetails;

      const product = {
        id: {id}, 
        image: {image},
        name: {title},
        price: {price}
      };

      const handleAddToCart=()=>{
        addToCart(product);
      }
    return (

        <div className="Inventory2">

            <div className="sec1">
                <h2>{title}</h2>
                <p><img src={image} alt={title} style={{ maxWidth: "450px" }} className="image"/></p>

            </div>

            <div className="sec2">
                <p>{description}</p>
                <p className="price">Price: ${price}</p>
                {/* a conditional is used to prevent a runtime error */}
                {rating &&
                 <div className="rate"> Rating: {rating.rate}/5 ⭐ </div>
                 }
                 {rating &&
                 <div className="rate">  {rating.count} ratings</div>
                 }
                <button style={{ maxWidth: "100px" }} onClick={handleAddToCart}> Add to Cart</button>


                </div>
        
            
    
        </div>
    )
    

}