import Button from "@restart/ui/esm/Button"
import { useNavigate } from "react-router"
import { ItemCount} from "../ItemCount/ItemCount" 
import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

export const ItemDetail = ({id, name, img, desc, price, category, stock}) =>{

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState (0)
   
    
    const handleVolver = () =>{
        navigate(-1)
    }

    const handleVolverInicio = () =>{
        navigate('/')
    }

    const handleAgregar = ()=>{

        if (cantidad > 0){
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                cantidad

            })
            
            
            }            
        }


    return(
        <div>
            
            <h2>{name}</h2>
            <img src={img} alt= {name} />
            <p>{desc}</p>
            <p>Precio: ${price}</p>
            
            {
                !isInCart(id)
                ?
                <ItemCount
                    max={stock}
                    cantidad= {cantidad} 
                    setCantidad={setCantidad}
                    onAdd={handleAgregar}
                /> 
                :<div>
                    <Link to="/cart" className="btn btn-primary">Terminar mi Compra</Link>
                    <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
                </div>
                
                
                
            }

            <button className="btn btn-primary" onClick={handleVolver}>volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Inicio</button>


        </div>
    )
}