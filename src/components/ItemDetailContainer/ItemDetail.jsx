import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(cartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count}
    
    addProductInCart(productCart)

    setShowItemCount(false)
  }
  return (
    <div className="detail-item-container">
      <div className="detail-item-card">
        <img src={product.image} alt={product.name} width={600} />
        <div className="detail-text-container">
          <h2 className="detail-title">{product.name}</h2>
          <p className="detail-text">{product.description}</p>
          <p className="detail-text-price">Precio: ${product.price}</p>

          {
            showItemCount=== true ?
            (<ItemCount stock={product.stock} addProduct={addProduct}/>)
            :
            (<Link to="/cart" className="link-finish-purchase">Terminar mi compra</Link>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
