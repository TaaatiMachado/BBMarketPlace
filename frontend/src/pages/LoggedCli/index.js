import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './logcli-style.css'
import logo from '../../assets/img/IMG_3520.PNG'
import Banner from '../../assets/img/banner.PNG'
import Carousel from '../../components/carrousel-cli/carrousel'

export default function LoggedCli() {
  return (
    <div className="align-items-center justify-content-center">
      <Card className="d-flex flex-row align-items-start m-5">
      <Card className='mr-3 align-items-center m-5'>
        <Card.Img className="cli-img m-2 mt-3" src={logo} />
          <Card.Body className="d-flex flex-column justify-content-start m-5 cli-card">
            <Card.Title>Bem-vindo de volta :)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">[Nome do Cliente]</Card.Subtitle>
            <Dropdown.Divider />
            <Card.Text> O que você precisa hoje? </Card.Text>
            <Form>
              <Form.Row className="align-items-center d-flex flex-row">
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Digite alguma coisa..."
                  />
                    <Button type="submit" className="mb-2 b1-btn" block>
                      Buscar
                    </Button>
              </Form.Row>
            </Form>
            <Dropdown.Divider />
            <Button className="b2-btn" href="#"  size="lg" block> <MdAddShoppingCart/> Ir para o carrinho</Button>
          </Card.Body>
        </Card>

        <Card className="m-5 home-card">
            <img className="banner mt-3" src={Banner} alt="banner"></img>
            <Card.Body className="d-flex flex-column justify-content-start cli-card">
              <Card.Title>Oi, [Nome do cliente]</Card.Title>
              <Card.Subtitle  className="mb-5 text-muted">
              Aqui estão algumas sugestões:
              </Card.Subtitle>
              <Carousel/>
           </Card.Body>
        </Card>
      </Card>
  </div>
  )
};

