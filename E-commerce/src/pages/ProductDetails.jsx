import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../components/API";
import "../css_styling/productDetails.css"

export default function ProductDetails (){

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

      const {title,image, price, description, rating }=productDetails;
    return (

        <div className="Inventory2">
            <div className="sec1">
                <h2>{title}</h2>
                <img src={image} alt={title} style={{ maxWidth: "100%" }}/>
            </div>

            <div className="sec2">
                <p>{description}</p>
                <p>Price: ${price}</p>
            </div>
        
            <div className="sec3">
                {/* a conditional is used to prevent a runtime error */}
                {rating &&
                 <div> Rating: {rating.rate} ⭐</div>
                 }
                
            </div>
    
        </div>
    )
    

}