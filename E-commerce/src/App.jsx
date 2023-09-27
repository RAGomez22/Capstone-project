import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar.jsx';
import Home from './pages/homepage';
import ProductDetails from './pages/ProductDetails';
function App() {
  const [product,setProduct]=useState();
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path= "/product/:id" element ={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App

