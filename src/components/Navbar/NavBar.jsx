import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import logo from "../../assets/logo2.png"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <div className='navbar'>
      <li></li><Link to="/"className='marca'> 
      <img className='logo' src= {logo} alt="" />
        <h2>Viajes Epicos</h2>
        </Link>
      <ul>
       <Link to="/category/Destinos"> <li>Destinos</li></Link>
       <Link to="/category/Hoteles"> <li>Hoteles</li></Link>
       <Link to="/category/Paquetes"> <li>Paquetes</li></Link>
      
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar
