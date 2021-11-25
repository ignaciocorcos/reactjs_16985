import React from 'react'
import { Card, DropdownButton, ButtonGroup, Button  } from "react-bootstrap"
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export ItemDetail({ id, name, img, desc, price }) {
    return (
        <Container className="my-5">
            <h2>Producto</h2>
            <hr />
            <Row>
                <Card key={id} style={{ width: '18rem' }} className="m-2">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name} </Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <DropdownButton as={ButtonGroup} title="Descripcion" id="bg-nested-dropdown">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">Precio: ${price}</p>
                            <p className="card-text">{desc}</p>
                        </DropdownButton>
                    </Card.Body>
                    <ItemCount stock="5" />
                </Card>
                {items.map((prod) => <Item key={prod.id} {...prod} />)}
            </Row>
        </Container>

    )
}


