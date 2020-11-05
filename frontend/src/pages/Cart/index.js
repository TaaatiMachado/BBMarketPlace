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
          <Card.Body className="d-flex flex-row justify-content-around align-items-center cart-card">
              <Card.Img className="cart-img" src="https://koch-img.azureedge.net/product/29820-alho-poro-unidade-g.jpg" />
              <Card.Title>Alho Poró</Card.Title>
              <Card.Text>     
                R$ 4,80
              </Card.Text>
            <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
          </Card.Body>
      </Card>

      <Card className="d-flex flex-row align-items-center justify-content-around m-3 cart-card">
      <Card.Body className=" d-flex flex-row justify-content-around align-items-center cart-card">
          <Card.Img variant="side" className="cart-img" src="https://organicossaocarlos.com.br/wp-content/uploads/2019/07/morango.jpg" />
          <Card.Title>Morango</Card.Title>
          <Card.Text>     
            R$ 4,98
          </Card.Text>
        <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
      </Card.Body>
      </Card>

      <Card className="d-flex flex-row align-items-center justify-content-around m-3 cart-card mb-5 ">
      <Card.Body className="d-flex flex-row justify-content-around align-items-center cart-card">
          <Card.Img variant="side" className="cart-img" src="https://images.zonasul.com.br/imagem1000X1000/2020424_kiwi_1081-2.jpg" />
          <Card.Title>Quiwi</Card.Title>
          <Card.Text>     
            R$ 6,24
          </Card.Text>
        <Button className="delete-btn"><MdDelete size={25} color="#FFF"/></Button>
      </Card.Body>
      </Card>
      
      <Button className="finish-btn mb-3" href="/sucesso"> FINALIZAR COMPRA <MdArrowForward size={25} color="#FFF"/></Button>

    </div>
  );

}
