import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import carrito from "../../assets/carrito.png"
import { Link } from "react-router-dom"
import "./cartwidget.css"


const CartWidget = () => {
  const { totalQuantity} = useContext(cartContext)

  const total = totalQuantity()

  return (
    <Link to="/cart" className='cart'>
      <img src={carrito} alt="" />
      <p>{ total >=1 && total }</p>
    </Link>
  )
}

export default CartWidget
