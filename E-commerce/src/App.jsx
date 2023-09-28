import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar.jsx';
import Home from './pages/homepage';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/login.jsx';
function App() {
  const [product,setProduct]=useState();
  const [token, setToken]=useState(localStorage.getItem('token'));

  return (
    <div>
      <NavBar setToken={setToken} token={token}/>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path= "/product/:id" element ={<ProductDetails />}/>
        <Route path="/login" element ={<Login setToken={setToken}/>} />
      </Routes>
    </div>
  )
}

export default App

