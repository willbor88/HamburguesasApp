import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'//Recibira la ruta de la imagen que webpack copiara
import clases from './Logo.css'
const logo =(props)=>(

<div className={clases.Logo}>
    <img src={burgerLogo} alt='Logo Hamburguesa...'/>
</div>

)

export default logo