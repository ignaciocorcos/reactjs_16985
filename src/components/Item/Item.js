import React from 'react'
import { Card, DropdownButton, ButtonGroup, Button  } from "react-bootstrap"

import { Link } from 'react-router-dom'

export const Item = ({id, name, img, desc, price, category}) => {
    return (
        <Card key={id} style={{ width: '18rem' }} className= "m-2">
            <Card.Img variant="top" src= {img} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Text>
                </Card.Text>
                <DropdownButton as={ButtonGroup} title="Descripcion" id="bg-nested-dropdown">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{desc}</p>
                <p className="card-text">{category}</p>
                
                </DropdownButton>

                <Link className= "btn btn-primary m-1" to={`/detail/${id}` }>Ver mas</Link>
                
            </Card.Body>
            
        </Card>
    )
}

