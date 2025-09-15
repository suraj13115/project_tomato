import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import {Route ,Routes} from 'react-router-dom'
import Home from './components/pages/Home/Home.jsx'
import Cart from './components/pages/Cart/Cart.jsx'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
 
  return (
  <>
  {showLogin ? <LoginPopup   setShowLogin={setShowLogin}/> : <></>}
  <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element ={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
