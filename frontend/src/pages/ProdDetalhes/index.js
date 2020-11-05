import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import {MdStar} from 'react-icons/md'
import {MdStarHalf} from 'react-icons/md'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './PDstyle.css'

export default function ProdDetalhes() {
  return (
    <div className="d-body">
      <Card className="d-flex flex-row m-5">
        <Card className="d-flex align-items-start flex-row p-3 m-5 prod-card">
          <Card.Img className="pr-img" src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" />
            <Card.Body className="buy-card">
              <Card.Title>Fone JBL</Card.Title>
              <Card.Title><MdStar/><MdStar/><MdStar/><MdStar/><MdStarHalf/></Card.Title>
              <Card.Subtitle  className="mb-2 text-muted">
              Os Fones JBL TUNE500BT permitem-lhe transmitir um som potente e com exelente qualidade durante 16 horas de puro prazer. 
              Fácil de usar e equipado com drivers JBL de 32 mm e som JBL Pure Bass, esses fones de ouvido proporcionam fácil acesso a um excelente som.
              </Card.Subtitle>
              <small><a href="#">Polítiva de troca e devolução</a></small>
            </Card.Body>
        </Card>

        <Card className="m-5">
          <Card.Body className="d-flex flex-column m-2 justify-content-around buy-card">
            <Card.Title>R$ 249,90</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">ou em até 12x sem juros no cartão de crédito</Card.Subtitle>
            <Dropdown.Divider />
            <Card.Text> Calcular frete e prazo.  </Card.Text>
            <Form>
              <Form.Row className="align-items-center d-flex flex-row">
                  <Form.Control
                    className="mb-2 mr-2 cep"
                    id="inlineFormInput"
                    placeholder="CEP"
                  />
                    <Button type="submit" className="mb-2 b1-btn">
                      OK
                    </Button>
              </Form.Row>
            </Form>
            <Dropdown.Divider />
            <Button className="b1-btn" href="#" size="lg" block>COMPRAR</Button>
            <Button className="b2-btn" href="#"  size="lg" block> <MdAddShoppingCart/> ADICIONAR</Button>
          </Card.Body>
        </Card>
    </Card>
  </div>
  )
};

