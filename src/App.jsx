import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies';
import Footer from './components/Footer';
import HomePage from "./components/HomePage";  
import News from './components/News';

const App = () => {
 

  return (
    <>
    
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    <Footer/>
    {/* <HomePage/> */}
    
    </>
  )
}

export default App