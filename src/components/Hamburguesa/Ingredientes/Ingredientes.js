import React from 'react';
import clases from '../../Hamburguesa/Ingredientes/Ingredientes.css' ;
import propTypes from 'prop-types';

const ingredientes =(props)=>{
let ingrediente = null;

switch (props.type) {
    case ('fondoPan'):
        ingrediente= <div className={clases.FondoPan}></div>;
        break;

        case ('tapaPan'):
        ingrediente=(
        <div className={clases.TapaPan}>
            <div className={clases.Adicion1}></div>
            <div className={clases.Adicion2}></div>
        </div>
        );
        break;
    
        case ('carne'):
            ingrediente=<div className={clases.Carne}></div>;
            break;


            case ('queso'):
            ingrediente=<div className={clases.Queso}></div>;
            break;

            case ('ensalada'):
            ingrediente=<div className={clases.Ensalada}></div>;
            break;

            case ('tocineta'):
            ingrediente=<div className={clases.Tocineta}></div>;
            break;

            default:
                ingrediente=null;
                    break;   
}

return ingrediente
}
ingredientes.propTypes={
    type:propTypes.string.isRequired,
    }




export default ingredientes;