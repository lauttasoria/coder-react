import React, { useState } from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Button } from './Button'
import ItemDetailContainer from './ItemDetailContainer'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () =>{
    setIsVisible(true)
  }

  return (
    <div className='cardReal'>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
        <img src={producto.image} alt="" />
        <Button color="black" funcion={mostrarDetalles}> 
          <Link to={`/detalle/${producto.id}`}>Ver Mas </Link> 
        </Button>
        {
          isVisible ? <ItemDetailContainer id={producto.id} /> : <p>Haz clic para ver mas informacion </p>
        }
    </div>
  )
}