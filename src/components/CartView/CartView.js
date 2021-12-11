import React, {useContext}from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { CartItem } from './CartItem'


export const CartView = () => {

    const {carrito, vaciarCarrito, removerDelCarrito} = useContext(CartContext)
    return (
        <div className="container my-5">
            {
                carrito.length>0
                ?   <>
                        <h2>Cart View</h2>
                        <section>
                        {
                             carrito.map((prod)=> <CartItem{...prod}/>)
                         }
                        </section>
                        <hr/>
                         <div>
                            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                             <button className="btn btn-succes mx-2" >Terminar mi Compra</button>

                        </div>
                
                
                    </>
                    :   <>
                    <h2> No agregaste item al carrito aún </h2>
                    <hr/>
                    <Link to="/" className="btn btn-primary">Volver</Link>
                    </>


            }
            
        </div>
    )
}
