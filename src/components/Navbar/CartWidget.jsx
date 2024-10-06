import React from 'react'
import carrito from "../../assets/carrito.png"
import "./cartwidget.css"


const CartWidget = () => {
  return (
    <div className='cart'>
      <img src={carrito} alt="" />
      <p>20</p>
    </div>
  )
}

export default CartWidget
