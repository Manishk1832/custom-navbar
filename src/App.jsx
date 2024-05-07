import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-[url('/img/imh3.png')] relative text-black text-center bg-cover  backdrop-hue-rotate-180  bg-center bg-no-repeat h-screen ">
    <Navbar/>

    </div>

      <Routes>
       
      </Routes>

    </BrowserRouter>
      
  )
}

export default App
