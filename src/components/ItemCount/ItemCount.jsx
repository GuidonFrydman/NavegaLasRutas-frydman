import { useState } from 'react'
import "./itemcount.css"

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1)

    const handleClickSubstract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handeClickAdd = () => {
        if (count < stock)
            setCount(count + 1)
    }

    return (
        <div className="itemcount-container">
            <button onClick={handleClickSubstract}>-</button>
            <p>{count}</p>
            <button onClick={handeClickAdd}>+</button>
            <button onClick={ () => addProduct(count) } >agregar producto al carrito</button>
        </div>
    )
}

export default ItemCount
