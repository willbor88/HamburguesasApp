import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import clases from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliar'

const sideDrawer=(props)=>{
let agregarClases=[clases.SideDrawer,clases.Close]
if (props.abrir) {
    agregarClases=[clases.SideDrawer,clases.Open]
}

return(

    <Aux>
        <Backdrop mostrar={props.abrir} click={props.cerrar}/>
<div className={agregarClases.join(' ')}>
    <div className={clases.Logo}>
<Logo/>
</div>
<nav>
    <NavigationItems/>
</nav>

</div>
</Aux>
)




}

export default sideDrawer

