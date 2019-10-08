import React from 'react'
import clases from './button.css'
const button=(props)=>(
    // pasar las clases con un array de strings a treves del className
<button onClick={props.click } className={[clases.Button,clases[props.tipoBoton]].join(' ')}>
    {props.children}
</button> 
)


export default button
