import React from 'react'
import './App.css'
import './index.css'
import { Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App