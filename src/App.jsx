import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies';
import HomePage from "./components/HomePage";  

const App = () => {
 

  return (
    <>
    
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
      </Routes>
    
    {/* <HomePage/> */}
    
    </>
  )
}

export default App