import React from 'react';
import clases from '../Hamburguesa/Hamburguesa.css';
import Ingrediente from '../../components/Hamburguesa/Ingredientes/Ingredientes'


const  hamburguesa =(props)=>{

    let listarIngredientes= Object.keys(props.ingredientes).map(nombreIngre=>{
        // return <p>{nombreIngre}</p>
       return   [...Array(props.ingredientes[nombreIngre])].map((_,i)=>{
            return   <Ingrediente key={nombreIngre +i} type={nombreIngre}></Ingrediente>
  
         })
    
    })
    .reduce((array,elemento)=>{//array es el elemento para  iniciar y luego le agregamos cada elemento que recorremos
        return array.concat(elemento)//sacar un solo array para luego ver si esta vacio
    })

    if (listarIngredientes.length=== 0){
        listarIngredientes=<p>Porfavor agrega ingredientes a tu hamburguesa...</p>
    
    }
    return(
        
    <div className={clases.Hamburguesa}> 
    <Ingrediente key={'fff'} type='tapaPan' />
     {listarIngredientes}
     <Ingrediente key={'ffñ'} type='fondoPan' />
    </div>

    );
}

export default hamburguesa;