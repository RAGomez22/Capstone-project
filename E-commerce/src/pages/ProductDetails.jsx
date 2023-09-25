import React from "react";
import { useState,useEffect } from "react";

export default function ProductDetails (a){

    const index = a; 

    const [ProductDetails,SetProductDetails]=useState([]);

    const fetchData = ()=> {
        fetch (`https://fakestoreapi.com/products/${index}`)
        .then(response => {
            return (response.json() )})
        .then(data =>{
            SetProductDetails(data)
        })
    
    } 
    useEffect (()=> {
        fetchData()
    },[]);

    return (
        <div>
            {ProductDetails.length > 0 && (
                <ul className="Inventory">
                    {ProductDetails.map((item) => (
                        <li className ="Inventory" key={item.id} > <a href=''> <img src={item.image} /> Title: {item.title} </a> </li>
                      

                    ))}
                </ul>
            )}
        </div>
    )
    

}