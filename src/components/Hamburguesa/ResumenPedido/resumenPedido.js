import React, {Component} from 'react'
import Aux from '../../../hoc/Auxiliar'
import Boton from '../../UI/Button/button'

class ResumenPedido  extends Component {
    componentDidUpdate(){
    console.log('[ResumenPedido]WillUptade')
}
        
    render(){

        const listaringredientes = Object.keys(this.props.ingredientes).map((ingredienteClave)=>{
            return (
            <li key={ingredienteClave}><span style={{textTransform:'capitalize'}}>{ingredienteClave}</span>:{this.props.ingredientes[ingredienteClave]}</li>)
        
            })
return(
<Aux>
<h3>Su orden...</h3>
<p>Estos son sus ingredientes </p>
<ul>
{listaringredientes}
</ul>
<p><strong>Precio total $:{this.props.precio}</strong></p>
<p>continuar a la comprobación...</p>
<Boton tipoBoton='Danger' click={this.props.compraCancelada}>Cancelar</Boton>
<Boton tipoBoton='Success'click={this.props.compraConfirmada}>Continuar</Boton>
</Aux>
)
    }
}


export default ResumenPedido