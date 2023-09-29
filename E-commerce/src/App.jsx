import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar.jsx';
import ProductDetails from './pages/ProductDetails';
import GetInventory from './components/GetInventory.jsx';
import Login from './pages/login.jsx';
import CartPage from './pages/cart.jsx';
function App() {
  //sets State for cart in app so it can persist troughout app
  const [cart,setCart]=useState(()=>{  
    const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : []});
 


  const addToCart=(item)=>{
    //findIndex searched for an item in cart array with the same id as the item being added 
    // the comparisson is happening in cartItem.id===item.id
    //cartItem is a parameter that signifies each item in the cart array 
    //the findiNDEX METHOD itterates through each item in the array, similar to for each loop/ while loop
    //using ...cart, the item will retain its info but be added to the end of the array 
    const itemIndex = cart.findIndex((cartItem)=>cartItem.id===item.id); 
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(cart));

    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeProduct=(product)=>{
    const updatedCart = cart.filter((item)=>item.id !== product);
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  //sets state for token so it can give certain users specific fucntionality
  //allows for UI changes when token is present 
  const [token, setToken]=useState(localStorage.getItem('token'));

  return (
    <div>
      <NavBar cart={cart} setToken={setToken} token={token}/>
      

      <Routes>
        <Route path="/" element ={<GetInventory addToCart={addToCart} removeProduct={removeProduct}/>} />
        <Route path= '/product/:id' element ={<ProductDetails addToCart={addToCart}/>}/>
        <Route path="/login" element ={<Login setToken={setToken}/>} />
        <Route path="/cart" element ={<CartPage cart={cart} setToken={setToken}/>} />
      </Routes>
    </div>
  )
}

export default App

