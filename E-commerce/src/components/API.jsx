import { ErrorResponse } from "@remix-run/router";

const Base_URL= 'https://fakestoreapi.com/products'

export const fetchInventory = async()=>{
    try{
        const response = await fetch(`${Base_URL}`);
        const products = await response.json();
        console.log(products);
        return products;

    }catch(error){
        console.log(ErrorResponse);
    }
}

export const fetchProductDetails = async(id)=>{
    try{
        const response= await fetch(`${Base_URL}/${id}`)
        const product = await response.json();
        console.log(product);
        return product; 
    }
    catch(error){
        console.log(error);
    }
}
export const loginUser = async(username,password)=>{
    try{
        const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                
                username,
                password
            }),
            
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result.token);
        return result.token;
    }
    catch(error){
        console.log(Error);
    }
}

