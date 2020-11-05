import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import {MdStar} from 'react-icons/md'
import {MdStarHalf} from 'react-icons/md'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './s-style.css'

export default function Sucesso() {
  return (

      <Card className="d-flex flex-column align-items-center m-5">
        <Card className="d-flex align-items-center flex-column p-3 m-5 prod-card">
          <Card.Img className="pr-img" src="https://d3o3bdzeq5san1.cloudfront.net/155/154677.svg" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <h1>SUCESSO!</h1>
              
              <h4  className="mb-2 text-justify">
              Sua compra já está sendo processada e em breve será entregue no endereço informado!
              </h4>
              <h4>
              Obrigado por escolher a Banana Banana!
              </h4>
              <Button className="b2-btn block btn-lg mt-5 mb-2" href="/">VOLTAR PARA A HOME </Button>
              <small><a href="#">Polítiva de troca e devolução</a></small>
            </Card.Body>
        </Card>
    </Card>

  )
};

