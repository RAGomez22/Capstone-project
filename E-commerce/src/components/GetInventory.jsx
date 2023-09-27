import React, {useEffect, useState} from "react"
import ProductDetails from "../pages/ProductDetails"
import { fetchInventory } from "./API";
import { Link } from 'react-router-dom';

export default function GetInventory () {
//usestate set to array 
    const [inventory, setInventory] = useState([])

    //api route isn't defined so inventory is used to pull out information 
    useEffect(()=>{
        async function fetchData(){
            const inventory= await fetchInventory(); 
            setInventory(inventory);
        }
        fetchData();
      },[]);
    //p tag spaces list out better than list tag 
    // could make li data a tags so they can be split better rather than 
    //drop down style
    //would linking a tags allow me to go to an individual item page based on the item clicked
    return (
    <div>
        <h2>hi</h2>
        <div>
            {inventory.length > 0 && (
                <ul className="Inventory">
                    {inventory.map(({id,image,title}) => (
                        <li className ="Inventory" key={id} > 
                            <a> <Link to ={`${id}`}> <img src={image} /> Title: {title} </Link></a> 
                        </li>
                        

                    ))}
                </ul>
            )}
        </div>
    </div>
    );
}