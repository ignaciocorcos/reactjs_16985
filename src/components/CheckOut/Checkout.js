import { collection, Timestamp,writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore/lite'
import React, { useContext, useState } from 'react'
import { BsSortDownAlt } from 'react-icons/bs'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase/confing'
import { validarDatos } from '../../helpers/validarDatos'
import Swal from 'sweetalert2'


export const Checkout = () => {

    const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm:'',
    })

    const handleInputChange = (e) => {
                
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validarDatos(values)){ return }

        const orden = {
            buyer: {...values },
            items: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate( new Date() )
        }
        
        const batch = writeBatch(db)

        const ordersRef = collection(db, "order")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))
        
        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = carrito.find((prod) => prod.id === doc.id)
            
            if(doc.data().stock >= itemToUpdate.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad

                })
            } else{
                outOfStock.push(itemToUpdate)
            }
        })

        if(outOfStock.length === 0){
            
            addDoc(ordersRef, orden)
                .then((res) => {
                    batch.commit()
                    Swal.fire({
                        icon: 'success',
                        title: 'Su orden a sido registrada',
                        text: `su numero de orden es : ${res.id} `
                    })
                    vaciarCarrito()
                })
        } else{
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los productos ',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }

        
    }


    return (

        <>

            {carrito.length === 0
                ? <Navigate to='/' />
                :
                <div className='container my-5'>
                    <h2>Resumen de Compra</h2>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                        />
                        {values.nombre.length < 4 && <small>Nombre inv??lido</small>}

                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control my-2"
                            type="text"
                            placeholder="apellido"
                        />
                        {values.apellido.length < 4 && <small>Apellido inv??lido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email inv??lido</small>}

                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="form-control my-2"
                            type="email"
                            placeholder="confirme email"
                        />
                        {values.emailConfirm !== values.email && <small>Email no coincide </small>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}
