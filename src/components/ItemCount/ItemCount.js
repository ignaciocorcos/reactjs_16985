import React  from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1)

    const incrementar = ()=>{
        if(stock>counter){
            setCounter(counter+1)
        }else{
            alert("Sin Stock!!!")
        }
    }
       
        
    const decrementar = ()=>{
        if(counter>1){
            setCounter(counter-1)
        }else{
            alert("Valor menor a 1!!!")
        }
    }
    const respuesta=()=>{
        alert( `Agregaste al carrito  ${counter} unidades` )
    }

    return (
        <div>
            <div>
                <Button variant="secondary" onClick={decrementar}>-</Button>
                  <h2>{counter}</h2>
                <Button variant="secondary" onClick={incrementar}>+</Button>
            </div>
            <Button variant="secondary" onClick={respuesta}>Agregar al Carrito</Button>
            
        </div>
    )
}


//minuto 23mm