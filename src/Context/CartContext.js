import { createContext, useState } from "react";



export const CartContext = createContext ()

//custon provider

export const CartProvider = ( {children}) =>{
  
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) =>{
      setCarrito( [...carrito, item])
    }
  
    const removerDelCarrito = (id) =>{
      setCarrito( carrito.filter( prod => prod.id !== id ))
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
  
    const totalCantidad = () => {
      return carrito.reduce((acc,prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () =>{
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }
  
    const isInCart =(id) =>{
      return carrito.some (prod => prod.id === id)
    }

    return(
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            vaciarCarrito,
            isInCart,
            totalCantidad,
            totalCompra
          }}>
              {children}

        </CartContext.Provider>
    )
}

//tiempo 1:24