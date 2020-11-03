import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './prod-style.css'

export default function Produto() {
  return (
    
        <Card className="prod">
          <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" alt="FONE JBL "/>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Fone JBL</Card.Title>
            <Card.Text>
             R$ 750,00
            </Card.Text>
            <Button className="buy-btn" block> <MdAddShoppingCart size={25} color="#FFF"/> Comprar</Button>
          </Card.Body>
        </Card>

  )
};

