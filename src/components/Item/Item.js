import React from 'react'
import { Card, DropdownButton, ButtonGroup,  } from "react-bootstrap"
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({id, name, img, desc, price}) => {
    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {img} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Text>
                </Card.Text>
                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{desc}</p>
                </DropdownButton>
            </Card.Body>
            <ItemCount stock="5"/>
        </Card>
    )
}