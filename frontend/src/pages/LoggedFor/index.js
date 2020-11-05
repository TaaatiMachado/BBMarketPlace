import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './logcfor-style.css'
import logo from '../../assets/img/IMG_3520.PNG'
import Banner from '../../assets/img/banner.PNG'
import Prod from '../../components/ProductsFor'

export default function LoggedFor() {
  return (
    <div className="align-items-center justify-content-center">
      <Card className="d-flex flex-row align-items-start m-5">
      <Card className='mr-3 align-items-center m-5'>
        <Card.Img className="cli-img m-2 mt-3" src={logo} />
          <Card.Body className="d-flex flex-column justify-content-start m-5 prod-card">
            <Card.Title>Bem-vindo de volta :)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">[Nome do Fornecedor]</Card.Subtitle>
            <Dropdown.Divider />
            <Card.Text> O que vamos anunciar hoje? </Card.Text>
            <Form>
              <Form.Row className="align-items-center d-flex flex-row">
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Digite alguma coisa..."
                  />
                    <Button type="submit" className="mb-2 b1-btn" block>
                      Abrir anúncios
                    </Button>
              </Form.Row>
            </Form>
            <Dropdown.Divider />
            <Button className="b2-btn" href="/cadastroProd"  size="lg" block> Adicionar novo produto</Button>
          </Card.Body>
        </Card>

        <Card className="m-5 home-card">
            <img className="banner mt-3" src={Banner} alt="banner"></img>
            <Card.Body className="d-flex flex-column justify-content-start cli-card">
              <Card.Title>Oi, [Nome do Fornecedor]</Card.Title>
              <Card.Subtitle  className="mb-5 text-muted">
              Aqui estão seus produtos à venda:
              </Card.Subtitle>
              <Card className="d-flex flex-row flex-wrap justify-content-around p-5">
              <Prod/>
              <Prod/>
              <Prod/>
              <Prod/>
              <Prod/>
              <Prod/>
              </Card>
           </Card.Body>
        </Card>
      </Card>
  </div>
  )
};

