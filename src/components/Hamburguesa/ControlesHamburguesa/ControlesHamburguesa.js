import React from 'react'
import clases from './ControlesHamburguesa.css'
import ControlHambuguesa from './ControlHambuguesa/ControlHambuguesa'

const controles =[
{label:'Carne',type:'carne'},
{label:'Queso',type:'queso'},
{label:'Ensalada',type:'ensalada'},
{label:'Tocineta',type:'tocineta'},
]




const ControlesHamburguesa=(props)=>(
<div className={clases.ControlesHamburguesa}>
      <p>PRECIO Actual:<strong>{props.precio}</strong></p> 
     {controles.map(control =>(
    <ControlHambuguesa 
    key={control.label} 
    label={control.label}
    agregados={()=>props.Anadidos(control.type)}
    eliminados={()=>props.eliminados(control.type)}
    desabilitar={props.desabilitar[control.type]}
    /> 
      )
    )}
<button className={clases.OrdenarButton} disabled={!props.comprar} onClick={props.pedir}>ORDENAR</button>
</div>
);

export default ControlesHamburguesa

    
