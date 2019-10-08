import React from 'react'
import clases from './NavigationItem.css'
const navigationItem=(props)=>(

<li className={clases.NavigationItem}>
    <a href={props.link}
    // props.children envuelve el texto de la a etiqueta "a"
     className={props.active ? clases.active:null }>{props.children}
     </a>
</li>


)
export default navigationItem