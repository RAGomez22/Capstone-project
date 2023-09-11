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
    return (
    <div>
        <h2>hi</h2>
        <div>
            {inventory.length > 0 && (
                <ul className="Inventory">
                    {inventory.map(inventory => (
                        <p key={inventory.id} className ="Inventory"> {inventory.title}</p>
                    ))}
                </ul>
            )}
        </div>
    </div>
)
}