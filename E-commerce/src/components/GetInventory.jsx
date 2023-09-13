import React, {useEffect, useState} from "react"
export default function GetInventory () {
//usestate set to array 
    const [inventory, setInventory] = useState([])

    //api route isn't defined so inventory is used to pull out information 

    const fetchData = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            return response.json()
          })
          .then(data => {
            setInventory(data)
          })
      }
      useEffect(()=>{
        fetchData()
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
                    {inventory.map((item) => (
                        <li className ="Inventory" key={item.id} > <a> <img src={item.image} /> Title: {item.title} </a> </li>
                      

                    ))}
                </ul>
            )}
        </div>
    </div>
    );
}