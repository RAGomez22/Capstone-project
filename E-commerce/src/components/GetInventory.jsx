import React, {useEffect, useState} from "react"
import { fetchInventory } from "./API";
import { Link } from 'react-router-dom';
import "../css_styling/GetInventoryStyling.css";

export default function GetInventory ({addToCart}) {
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

      // add to cart function requires input when called because it is being mapped over in the return
      //at the specific map, send data to cart
    const handleAddToCart=(item)=>{
        addToCart(item);
    };

    

    return (
    <div>
        <div >
            {inventory.length > 0 && (
                <ul className="Inventory">
                    {inventory.map(({id,image, price, title}) => (
                
                      <li className ="Inventory" key={id} > 
                        <Link to ={`/product/${id}`}>  
                            <div>
                                <img src={image} className='_image'/> 
                                <p> {title} </p> 
                            </div>     
                        </Link>
                        <button className="homeButtons" onClick={()=> handleAddToCart({ id,title, image, price})}>Add to Cart</button>
                        
                    </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
    );
}//onClick={()=> handleAddToCart({ id,title, image, price}, e)} was removed because of buggy code 