import React, {useEffect, useState} from "react"
import { fetchInventory } from "./API";
import { Link } from 'react-router-dom';
import "../css_styling/GetInventoryStyling.css";

export default function GetInventory ({addToCart,removeProduct}) {
//usestate set to array 
    const [inventory, setInventory] = useState([]);
    const [category,setSelectedCategory]=useState([]);

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
        const updatedCart = JSON.stringify([...cart, product]);
        localStorage.setItem('cart', updatedCart);
    };


    const handleRemoveProduct = (item) => {
        removeProduct(item.id);
        const updatedCart = JSON.stringify([...cart, product]);
        localStorage.setItem('cart', updatedCart);
    };
    

    return (
    <div>
        <div >
            {inventory.length > 0 && (
                <ul className="Inventory">
                    {inventory.map(({id,image, price, title, quantity}) => (
                
                      <li className ="Inventory" key={id} > 
                        <Link to ={`/product/${id}`}>  
                            <div>
                                <img src={image} className='_image'/> 
                                <p> {title} </p> 
                            </div>     
                        </Link>
                        
                        <button className="homeButtons" onClick={()=> handleAddToCart({ id,title, image, price, quantity})}>Add to Cart </button>
                        <button className="homeButtons" onClick={()=> handleRemoveProduct({ id,title, image, price, quantity})}>Remove Item</button>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
    );
}