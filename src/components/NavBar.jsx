import React, {useContext} from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

const NavBar = () => {
  const {mensajito} = useContext(CartContext)
  const {darkTheme ,setDarkTheme} = useContext(ThemeContext)
  return (
    <nav>
        <Link to="/">
        <h2>Tienda de bebidas</h2>
        </Link>
        <CartWidget/>

        <Link to='/categoria/Licores' >Licores</Link>
        <Link to='/categoria/Cerveza'> Cerveza</Link>
        <Link to='/categoria/Gin'>Gin</Link>
        <h3>{mensajito} </h3>
        <button onClick={()=>setDarkTheme(!darkTheme)}>cambiar theme</button>
    </nav>
  )
}

export default NavBar