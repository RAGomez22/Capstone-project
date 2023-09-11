import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar.jsx';
import Home from './pages/homepage';
function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home" element ={<Home/>} />
      </Routes>
    </div>
  )
}

export default App

