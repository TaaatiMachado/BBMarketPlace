import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './cadcli-style.css'

export default function CadastroCli() {
  return (
    <div>
      <h3> Cadastre-se e aproveite ofertas incríveis! </h3>
      <Card className="card-body">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Nome" />
            </Col>
            <Col>
              <Form.Control placeholder="Sobrenome" />
            </Col>
          </Row>

          <Form.Group controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Control className="fcont"type="email" placeholder="E-mail" />
              </Col>
            </Row>  
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
          <Row>
            <Col>
              <Form.Control placeholder="Senha" />
            </Col>
            <Col>
              <Form.Control placeholder="Confirme sua Senha" />
            </Col>
          </Row>
          </Form.Group>

          <Form.Group>
            <Row>
                <Col>
                  <Form.Control placeholder="Telefone" />
                </Col>
                <Col>
                  <Form.Control placeholder="Celular" />
                </Col>
                <Col>
                  <Form.Control placeholder="CPF" />
                </Col>
              </Row>
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
              <Form.Label>Endereço</Form.Label>
              <Row>
                <Col>
                  <Form.Control placeholder="Rua" />
                </Col>
                <Col>
                  <Form.Control placeholder="Número" />
                </Col>
                <Col>
                  <Form.Control placeholder="Complemento" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
            <Row>
                <Col>
                  <Form.Control placeholder="Cidade" />
                </Col>
                <Col>
                  <Form.Control placeholder="UF" />
                </Col>
                <Col>
                  <Form.Control placeholder="CEP" />
                </Col>
              </Row>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Aceito receber ofertas exclusivas por e-mail e SMS." />
            <Form.Check type="checkbox" label="Aceito receber contato do BananaBanana por e-mail e SMS." />

          </Form.Group>
      </Form>
      <div className="cad-form">
          <Button className="cad-btn" type="submit">
            Criar seu cadastro
          </Button>
          <div className="user">
            <p>Já tem um cadastro?</p>   <a href="#">Entrar</a>
          </div>
        <small>Ao continuar com o acesso, você concorda com a nossa Política de Privacidade</small>
      </div>
    </Card>
  </div>
  )
};

