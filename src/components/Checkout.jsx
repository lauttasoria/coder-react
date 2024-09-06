import React from 'react'

const Checkout = () => {

const handleSubmit = (e) => {
    console.log(e)
}

  return (
    <div>
        <form className='flex flex-col' onSubmit={(e)=>handleSubmit(e)}>
            <span>Nombre</span>
            <input type="text" className='border border-black'/>
            <span>Mail</span>
            <input type="text" className='border border-black'/>
            <span>Direccion</span>
            <input type="text" className='border border-black'/>
            <button type='submit'>Confirmar</button>
        </form>
    </div>
  )
}

export default Checkout