import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, setCart, vaciarCart} = useContext(CartContext)

  return (
    <div>
      {cart.map(e=> {
        return (
          <CartItem key={e.id} producto={e}/>
        )
      })}
      <button onClick={vaciarCart}>Vaciar mi carrito</button>
      <Link to='/checkout'>Terminar de comprar</Link>
    </div>
  )
}

export default Cart