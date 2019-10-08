import React from 'react'
import clases from './ControlHambuguesa.css'
const controlHamburguesa =(props)=>(

<div className={clases.ControlHambuguesa}>
<div className={clases.label}>{props.label}</div>
<button className={clases.Less}onClick={props.eliminados} disabled={props.desabilitar}>Quitar</button>
<button className={clases.More} onClick={props.agregados}>Añadir</button>
</div>


)

export default controlHamburguesa