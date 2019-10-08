import React from 'react'
import clases from './Backdrop.css'
const  backdrop=(props)=>(
props.mostrar ?<div className={clases.Backdrop}onClick={props.click} ></div>:null

)






export default backdrop