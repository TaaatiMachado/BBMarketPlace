import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './cadprod-style.css'

export default function CadastroProd() {
  return (
    <div>
      <h3> Cadastre seus produtos! </h3>
      <Card className="card-body">
        <Form>
          <Form.Group>
          <Row>
            <Col>
              <Form.Control placeholder="Item" />
            </Col>
            <Col>
              <Form.Control placeholder="Ref" />
            </Col>
          </Row>
          </Form.Group>

          <Form.Group >
          <Row>
            <Col>
              <Form.Control placeholder="Descrição" />
            </Col>

          </Row>
          </Form.Group>

          <Form.Group>
            <Row>
                <Col>
                  <Form.Control placeholder="Marca" />
                </Col>
                <Col>
                  <Form.Control placeholder="Estoque" />
                </Col>
                <Col>
                  <Form.Control placeholder="Preço" />
                </Col>
              </Row>
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
              <Row>
                <Col>
                  <Form.File id="exampleFormControlFile1" label="Imagens" />
                </Col>
              </Row>
            </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Disponibilidade imediata" />
            <Form.Check type="checkbox" label="Frete por conta do comprador" />
            <Form.Check type="checkbox" label="Avisar quando o estoque estiver em 3 ou menos itens" />

          </Form.Group>
      </Form>
      
      
      <div className="cad-form">
          <Button className="cad-btn" type="submit">
            Publicar produto
          </Button>

        <small>Ao continuar com o acesso, você concorda com a nossa Política de Vendas e Privacidade.</small>
      </div>
    </Card>
  </div>
  )
};

