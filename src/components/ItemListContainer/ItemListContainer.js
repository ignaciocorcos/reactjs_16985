
import React, { useEffect, useState, useContext } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import context from 'react-bootstrap/esm/AccordionContext'
import { collection, getDocs, where, query } from 'firebase/firestore/lite'
import { db } from '../../firebase/confing'

export const ItemListContainer = () => {

    

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const {catId}= useParams()

    useEffect(() => {
        
        setLoading(true)
        const productosRef = collection(db, 'productos')
        
        const q = catId ? query (productosRef, where( 'category' , '==' , catId)) :productosRef
        
        getDocs (q)
            .then( (collection) => {
                const items = collection.docs.map ((doc)=> ({
                    id:doc.id,
                    ...doc.data()
                }))
                console.log(items)
                setProductos(items)
            } )
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList items={productos}/>
            }
        </>
    )
}
