import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductCard } from '../ProductCard/ProductCard'
import {ItemCount} from '../ItemCount/ItemCount'
import mpp from "../../assets/Maquinas/mpp/mpp16-20n_300x300.png"


export const ItemListContainer = ({ greeting}) => {
    
    
    return (

        <Container className= "my-5">
           
            <ProductCard img={mpp} name="Mpp20" stock="10"/>

        </Container>
        
    )
}
