import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../components/API";

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

      const {title, price, description}=productDetails;
    return (
        
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
    
        </div>
    )
    

}