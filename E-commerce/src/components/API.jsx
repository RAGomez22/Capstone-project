import { ErrorResponse } from "@remix-run/router";

const Base_URL= 'https://fakestoreapi.com/products'

export const fetchInventory = async()=>{
    try{
        const response = await fetch(`${Base_URL}`);
        const products = await response.json();
        console.log(products);
        return products;

    }catch(error){
        console.log(ErrorResponse)
    }
}