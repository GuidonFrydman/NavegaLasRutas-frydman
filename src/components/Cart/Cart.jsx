import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

if(cart.length === 0){
    return(
        <div className="empty-cart-message">
            <h2>No has seleccionado un producto aun</h2>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

  return (
    <div className="cart-container">
        {
      cart.map((productCart)=> (
        <div key={productCart.id} className="cart-item">
            <img src={productCart.image} alt="" width={100} />
            <p>{productCart.name}</p>
            <p>Precio por unidad: {productCart.price}</p>
            <p>Cantidad: {productCart.quantity} </p>
            <p>Precio Parcial: {productCart.quantity * productCart.price}</p>
            <button onClick={ ()=> deleteProductById(productCart.id) }>Eliminar Producto</button>
        
        </div>
      ))
    }
    <p className="cart-total">Precio Total $ {totalPrice()}</p>
    <div className="cart-actions">
    <button onClick={deleteCart}>Vaciar Carrito</button>
    <Link to ="/checkout" className="react-link">Finalizar mi compra</Link>
    </div>
    </div>
  )
}

export default Cart
