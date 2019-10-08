import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import clasess from './Layout.css';
import BarraHerramientas from '../Navegar/BarraHerramientas/BarraHerramientas'
import SideDrawer from '../Navegar/SideDrawer/SideDrewer'

class Layout extends Component{
    
    state={
        mostrarSideDrawer:false,
        
    }
        sideDrawerCerrarControlador=()=>{
            this.setState({mostrarSideDrawer:false})
        }

        sideDrawerToggleHandler=()=>{
            this.setState((PrevState)=>{
                return {mostrarSideDrawer:!this.setState.mostrarSideDrawer}//forma segura de actualizar el state cuando dependemos de su estado anterior
            })
        }
        render(){
        return(
        
            <Aux>
                <BarraHerramientas drawerToggleClick={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                cerrar={this.sideDrawerCerrarControlador}
                 abrir={this.state.mostrarSideDrawer}/>
             <main className={clasess.Content}>
                 {this.props.children}
             </main>
             </Aux>
         );
        
    }
} 

export default Layout;



