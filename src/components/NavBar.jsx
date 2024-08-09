import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">
        <h2>Tienda de bebidas</h2>
        </Link>
        <CartWidget/>

        <Link to='/categoria/Licores' >Licores</Link>
        <Link to='/categoria/Cerveza'> Cerveza</Link>
        <Link to='/categoria/Gin'>Gin</Link>
    </nav>
  )
}

export default NavBar