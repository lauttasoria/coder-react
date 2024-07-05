import React from 'react'
import './Button.css'

export const Button = ({texto, color}) => {
    console.log(texto, color)
    return(
        <button className={color}> {texto} </button>
    )
}