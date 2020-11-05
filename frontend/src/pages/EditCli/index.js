import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './editc-style.css'

export default function EditCli() {
  return (
    <div>
      <h3 className="m-4 ml-5"> Editar cadastro </h3>
      <Card className="m-2 flex-column align-items-center ml-5 mr-5 p-5">
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
      <div className="d-flex align-items-center justify-content-center flex-column">
          <Button className="btn-lg mb-2 mt-3 card-btn" type="submit" href="/loggedCli">
            Salvar alterações
          </Button>
          
        <small>Ao continuar com o acesso, você concorda com a nossa Política de Privacidade</small>
      </div>
    </Card>
  </div>
  )
};

