import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { Container } from './styles';
import logo from '../../assets/img/IMG_3521.PNG'

// componente Header da pagina 
export default function Header() {
  return (
      <Container>
        <img src={logo}/>
      </Container>
  );
}
