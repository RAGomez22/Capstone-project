import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar.jsx';
import Home from './pages/homepage';
import ProductDetails from './pages/ProductDetails';
function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path= "/1" element ={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App

