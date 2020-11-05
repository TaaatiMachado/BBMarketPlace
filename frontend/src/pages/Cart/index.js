import React from 'react';
import './cart-style.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {MdDelete} from 'react-icons/md'
import {MdArrowForward} from 'react-icons/md'

export default function Cart() {

  return (
    <div className="d-flex justify-content-center flex-column align-items-center m-3 body-cart">
      <h2>Meu carrinho</h2>
      <Card className="d-flex flex-row align-items-center justify-content-around m-3 cart-card">
          <Card.Body className="justify-content-around align-items-center cart-card">
              <Card.Img className="cart-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
              <Card.Title>Fone JBL</Card.Title>
              <Card.Text>     
                R$ 750,00
              </Card.Text>
            <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
          </Card.Body>
      </Card>

      <Card className="d-flex flex-row align-items-center justify-content-around m-3 cart-card">
      <Card.Body className="justify-content-around align-items-center cart-card">
          <Card.Img variant="side" className="cart-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
          <Card.Title>Fone JBL</Card.Title>
          <Card.Text>     
            R$ 750,00
          </Card.Text>
        <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
      </Card.Body>
      </Card>

      <Card className="d-flex flex-row align-items-center justify-content-around m-3 cart-card">
      <Card.Body className="justify-content-around align-items-center cart-card">
          <Card.Img variant="side" className="cart-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
          <Card.Title>Fone JBL</Card.Title>
          <Card.Text>     
            R$ 750,00
          </Card.Text>
        <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
      </Card.Body>
      </Card>
      
      <Button className="finish-btn" href="/sucesso"> FINALIZAR COMPRA <MdArrowForward size={25} color="#FFF"/></Button>

    </div>
  );

}
