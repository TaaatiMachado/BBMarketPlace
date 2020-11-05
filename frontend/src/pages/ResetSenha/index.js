import React from 'react';

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './s-style.css'

export default function Reset() {
  return (

    <Card className="d-flex flex-column align-items-center m-5">
    <Card className="d-flex align-items-center flex-column p-3 m-5 prod-card">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <h1>Esqueceu sua senha?</h1>
          
          <h4  className="mb-2 text-justify">
          Informe seu e-mail cadastrado abaixo para recuperar seu acesso:
          </h4>

          <Form className="d-flex flex-column align-items-center">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Seu e-mail aqui" />
              <Form.Text className="text-muted">
                Nós nunca compartilhamos seu e-mail com ninguém.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="b1-btn btn-lg" >
              Recuperar senha
            </Button>
          </Form>
          
          <Button className="b2-btn block btn-lg mt-5 mb-2" href="/">VOLTAR PARA A HOME </Button>
          <small><a href="#">Polítiva de troca e devolução</a></small>
        </Card.Body>
    </Card>
</Card>

  )
};

