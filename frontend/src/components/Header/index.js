import React from 'react';
import { MdShoppingBasket } from 'react-icons/md'
import { MdFingerprint } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'
import { MdAccountBox } from 'react-icons/md'
import { MdAttachMoney } from 'react-icons/md'
import { MdSentimentDissatisfied } from 'react-icons/md'
import logo from '../../assets/img/IMG_3524.PNG'
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import './header-style.css'


//Header da pagina 
export default function Header() {

    return (
      <Nav className="d-flex justify-content-between align-items-center navBar" variant="pills">
        <Nav.Item>
          <Nav.Link eventKey="home" className="ml-5 navLogo" href="/">
            <img className="logo-bnn" src={logo} alt="Logo"/>
          </Nav.Link>
        </Nav.Item>
        <div className="d-flex align-items-center">
          <Button variant="outline-light" className="btn-mkt" href="/cart"><MdShoppingBasket size={30} color="#fff"/> <Badge variant="danger">3</Badge></Button>
          <Dropdown>
            <Dropdown.Toggle className="login btn-mkt" id="dropdown-basic">
            <MdAccountBox size={30} color="#fff"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/login"><MdFingerprint size={25} color="#350065"/> Log in</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/cadastroCli"><MdPerson size={25} color="#350065"/>Quero comprar</Dropdown.Item>
              <Dropdown.Item href="/cadastroFor"><MdAttachMoney size={25} color="#350065"/>Quero vender  </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/reset"><MdSentimentDissatisfied size={25} color="#350065"/> Esqueci minha senha </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav>
    );
  
}
