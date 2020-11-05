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
          <Card.Img className="pr-img" src="https://images.zonasul.com.br/imagem1000X1000/2020424_kiwi_1081-2.jpg" />
            <Card.Body className="buy-card">
              <Card.Title>Quiwi (Kg)</Card.Title>
              <Card.Title><MdStar/><MdStar/><MdStar/><MdStar/><MdStarHalf/></Card.Title>
              <Card.Subtitle  className="mb-2 text-muted">
              Nome Família: Actinidáceas.
              O kiwi é rico em minerais como potássio, magnésio, cobre, ferro e fosfato. Além disso, é fonte de niacina, fibras e vitaminas C, E e B6. Por ser rico em Vitamina C, o kiwi possui propriedades no sistema imune, antianêmica, antiescorbútica e digestiva.A vitamina B6 e a niacina ajudam a atenuar às rugas da pele. Os minerais contribuem para equilibrar 
              a tensão arterial e também auxiliam no aumento das defesas do organismo contra gripes e resfriados.

              </Card.Subtitle>
              <small><a href="#">Polítiva de troca e devolução</a></small>
            </Card.Body>
        </Card>

        <Card className="m-5">
          <Card.Body className="d-flex flex-column m-2 justify-content-around buy-card">
            <Card.Title>R$ 6,24 / Kg</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Compre agora e receba no conforto da sua casa!</Card.Subtitle>
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
            <Button className="b1-btn" href="#" size="lg" block href="/sucesso">COMPRAR</Button>
            <Button className="b2-btn" href="#"  size="lg" block> <MdAddShoppingCart/> ADICIONAR</Button>
          </Card.Body>
        </Card>
    </Card>
  </div>
  )
};

