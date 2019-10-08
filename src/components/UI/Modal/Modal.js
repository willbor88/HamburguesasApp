import React,{Component} from 'react'
import clases from './Modal.css'
import Aux from '../../../hoc/Auxiliar'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component{
    
    shouldComponentUpdate(nextProps,nextState){
            return nextProps.mostrar !==this.props.mostrar
            
            }

           
    render(){
        
    return(
    

    <Aux>
        <Backdrop mostrar={this.props.mostrar} click={this.props.cerrarModal}/>
         <div 
    className={clases.Modal}
    style={{
        transform:this.props.mostrar ? 'translateY(0)':'translateY(-100vh)',//mover desde la posicio cero a una velocidad
        opacity:this.props.mostrar ?'1':'0'
    }}>
        {this.props.children}

    </div>
        
   
    </Aux>

)
    }
}
export default Modal



