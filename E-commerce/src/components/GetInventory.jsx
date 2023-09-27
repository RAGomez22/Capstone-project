import React, {useEffect, useState} from "react"
import { fetchInventory } from "./API";
import { Link } from 'react-router-dom';
import "../css_styling/GetInventoryStyling.css";
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
    return (
    <div>
        <div >
            {inventory.length > 0 && (
                <ul className="Inventory">
                    {inventory.map(({id,image,title}) => (
                
                      <li className ="Inventory" key={id} > 
                        <Link to ={`/product/${id}`}>  
                            <div>
                                <img src={image} className='_image'/> 
                                <p> {title} </p> 
                            </div>     
                        </Link>
                        <button className="">Add to Cart</button>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
    );
}