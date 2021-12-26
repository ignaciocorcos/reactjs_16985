import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/confing'

export const ItemDetailContainer = () => {
   
    const [Item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()
   
    useEffect(() => {

        setLoading(true)
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then ( (doc)=> {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })
         }, [itemId])
    


    return (
        <div className="container my-5">

            {
                loading
                ?<h2>Cargando...</h2>
                : <ItemDetail {...Item} />
            }
            
        </div>
    )
}
