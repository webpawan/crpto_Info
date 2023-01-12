import { AnimatePresence } from 'framer-motion';
import React from 'react'
import {Route,Routes, useLocation } from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies';
import Footer from './components/Footer';
import HomePage from "./components/HomePage";  
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
 const location = useLocation();

  return (
    <>
    
    <AnimatePresence>

<Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      </AnimatePresence>

    <Footer/>
    {/* <HomePage/> */}
    
    </>
  )
}

export default App