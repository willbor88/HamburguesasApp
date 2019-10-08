 import React from 'react'
 import clases from'./BarraHerramientas.css'
  import Logo from '../../Logo/Logo'
  import NavigationItems from '../NavigationItems/NavigationItems'
  import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

 const toolbar=(props)=>(

<header className={clases.Toolbar}>
    <DrawerToggle click={props.drawerToggleClick}/>
    <div className={clases.Logo}>
    <Logo />
    </div>
    <div>Logo</div>
    <nav className={clases.Desktop}>
       <NavigationItems/>
     </nav>
</header>

 )
 export default toolbar