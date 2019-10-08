import React from 'react'
import clases from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'



const navigationItems=(props)=>(
<ul className={clases.NavigationItems}>
<NavigationItem link='/' active>Preparar</NavigationItem>
<NavigationItem link='/'>Pagar</NavigationItem>
</ul>

)
export default navigationItems