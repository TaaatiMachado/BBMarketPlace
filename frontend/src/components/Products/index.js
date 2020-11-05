import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Produto() {
  return (
    
        <Card className="m-2 d-flex flex-column p-2 prod">
          <Card.Img variant="top" src="https://images.zonasul.com.br/imagem1000X1000/2020519_20087.jpg" alt="ALFACE"/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Alface crespa</Card.Title>
            <Card.Text>
             R$ 1,68
            </Card.Text>
            <Button className="buy-btn" block> <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

  )
};

