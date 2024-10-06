import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import logo from "../../assets/logo2.png"


const NavBar = () => {
  return (

    <div className='navbar'>
      <div className='marca'>
      <img className='logo' src= {logo} alt="" />
        <h2>Viajes Epicos</h2>
      </div>
      <ul>
        <li>destinos</li>
        <li>hoteles</li>
        <li>paquetes</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar
