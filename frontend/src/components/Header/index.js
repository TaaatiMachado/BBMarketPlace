import React from 'react';
import { MdShoppingBasket } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'
import { MdAccountBox } from 'react-icons/md'
import { MdAttachMoney } from 'react-icons/md'
import { MdSentimentDissatisfied } from 'react-icons/md'
import logo from '../../assets/img/IMG_3524.PNG'
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './style.css'


//Header da pagina 
export default function Header() {

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
      <Nav className="navBar" variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="home" className="navLogo" href="#/home">
            <img className="logo" src={logo} alt="Logo"/>
          </Nav.Link>
        </Nav.Item>
        <div className="menu">
          <Button variant="outline-light" className="btn-mkt"><MdShoppingBasket size={30} color="#fff"/></Button>
          <Dropdown>
            <Dropdown.Toggle className="login btn-mkt" id="dropdown-basic">
            <MdAccountBox size={30} color="#fff"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><MdPerson size={25} color="#350065"/>Quero comprar</Dropdown.Item>
              <Dropdown.Item href="#/action-2"><MdAttachMoney size={25} color="#350065"/>Quero vender  </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3"><MdSentimentDissatisfied size={25} color="#350065"/> Esqueci minha senha </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav>
    );
  
}