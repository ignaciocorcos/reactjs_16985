import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from '../../Context/CartContext';
import './CartWidget.scss'

export const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)
   
    return (
        <div>
            <AiOutlineShoppingCart className= "CartWidget"/>
            <spam>{totalCantidad()}</spam>

        </div>
    )
}
