import React,   {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Hamburguesa from '../../../src/components/Hamburguesa/Hamburguesa'
import ControlesHamburguesa from '../../components/Hamburguesa/ControlesHamburguesa/ControlesHamburguesa'
import Modal from '../../components/UI/Modal/Modal'
import ResumenPedido from '../../components/Hamburguesa/ResumenPedido/resumenPedido'

const INGREDIENTE_PRECIO={
    ensalada:3000,
    tocineta:3000,
    queso:3000,
    carne:3000,
}

class ConstructorHambuguesas extends Component{
state={
    ingredientes:{
        ensalada:0,
        tocineta:0,
        queso:0,
        carne:0,
    },
        precioTotal: 8000,
        compra:false,
        comprando:false
}

actualizarCompra=(ingrediente)=>{
       
    const sumar= Object.keys(ingrediente).map(nombre=>{
        //extraer el valor  de cada elemento del objeto ingrediente[nombre] al pasar cada elemetno del array Object.keys
        return   ingrediente[nombre]
    }).reduce((acumulador, elemento)=>{
        return  acumulador + elemento 
    },0)
    
    if (sumar> 0){
        console.log(sumar)
        this.setState({compra:true})
    }
    
}

compraControlador=()=>{
this.setState({comprando: true})


}

cancelarCompraControlador=()=>{

    this.setState({comprando:false})
}

continuarCompraControlador=()=>{

    alert('Gracias por tu compra..')

}

anadirIngredienteHandler = (type)=>{
const cantAnterior=this.state.ingredientes[type]
const cantActualizada = cantAnterior + 1
const nuevosIngredientes={
    ...this.state.ingredientes
}


nuevosIngredientes[type]= cantActualizada;//Crear un nuveo objeto,nunca cambiar el objeto del state directamente 
const  precioAdicion= INGREDIENTE_PRECIO[type]
const precioAnterior =this.state.precioTotal
const nuevoPrecio = precioAnterior+precioAdicion
this.setState({precioTotal:nuevoPrecio,ingredientes:nuevosIngredientes})
this.actualizarCompra(nuevosIngredientes)
}


ramoverIngredienteHandler=(type)=>{
    const cantAnterior=this.state.ingredientes[type]
    
    if (cantAnterior <= 0){
        return
    }
    const cantActualizada = cantAnterior - 1
    const nuevosIngredientes={
        ...this.state.ingredientes
    }

    nuevosIngredientes[type]= cantActualizada;//Crear un nuveo objeto,nunca cambiar el objeto del state directamente 
const  precioAdicion= INGREDIENTE_PRECIO[type]
const precioAnterior =this.state.precioTotal
const nuevoPrecio = precioAnterior-precioAdicion

this.setState({precioTotal:nuevoPrecio,ingredientes:nuevosIngredientes})
this.actualizarCompra(nuevosIngredientes)
    
}

render()
{
  const  desabilitarInfo={
        ...this.state.ingredientes 
     }

    for (let key in desabilitarInfo) {
        desabilitarInfo[key] = desabilitarInfo[key]<=0;//Actulizar el objeto desabilitarInfo a falso o true
        // console.log(desabilitarInfo[key]) 
        }

return(
    <Aux>
        <Modal mostrar={this.state.comprando} cerrarModal={this.cancelarCompraControlador}>
        <ResumenPedido
        ingredientes={this.state.ingredientes}
        compraCancelada={this.cancelarCompraControlador}
        compraConfirmada={this.continuarCompraControlador}
        precio={this.state.precioTotal}/>
        </Modal>
    <Hamburguesa ingredientes={this.state.ingredientes} />
    <ControlesHamburguesa 
    Anadidos={this.anadirIngredienteHandler}
    eliminados={this.ramoverIngredienteHandler}
    desabilitar={desabilitarInfo}
    precio={this.state.precioTotal}
    comprar={this.state.compra}
    pedir={this.compraControlador}/>
     </Aux>
); 


}



}

export default ConstructorHambuguesas;