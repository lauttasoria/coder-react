import React, { useState } from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Button } from './Button'
import { ItemDetailContainer } from './ItemDetailContainer'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () =>{
    setIsVisible(true)
  }

  const cardCN = 'flex flex-col bg-lime-200 rounded p-4 items-center justify-between w-2/5'

  return (
    <div className={cardCN}>
        <h3 className='texl-2lg font-bold text-sky-500 uppercase '>{producto.nombre}</h3>
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