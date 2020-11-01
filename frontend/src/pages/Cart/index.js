import React from 'react';
import './style.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {MdDelete} from 'react-icons/md'
import {MdArrowForward} from 'react-icons/md'



function Cart() {
  return (
    <div className="body-cart">
      <h2>Meu carrinho</h2>
      <Card className="cart-card">
          <Card.Body className="cart-card">
              <Card.Img variant="side" className="prod-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
              <Card.Title>Fone JBL</Card.Title>
              <Card.Text>     
                R$ 750,00
              </Card.Text>
            <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
          </Card.Body>
      </Card>

      <Card className="cart-card">
      <Card.Body className="cart-card">
          <Card.Img variant="side" className="prod-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
          <Card.Title>Fone JBL</Card.Title>
          <Card.Text>     
            R$ 750,00
          </Card.Text>
        <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
      </Card.Body>
      </Card>

      <Card className="cart-card">
      <Card.Body className="cart-card">
          <Card.Img variant="side" className="prod-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
          <Card.Title>Fone JBL</Card.Title>
          <Card.Text>     
            R$ 750,00
          </Card.Text>
        <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
      </Card.Body>
      </Card>

      <Button className="finish-btn"> FINALIZAR COMPRA <MdArrowForward size={25} color="#FFF"/></Button>

    </div>
  )
}

export default Cart;