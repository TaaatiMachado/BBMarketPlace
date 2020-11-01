import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'
import { Container, Cart } from './styles';
import logo from '../../assets/img/IMG_3524.PNG'

// componente Header da pagina 
export default function Header() {
  return (
      <Container>
          <Link to="/">
          <img src={logo} alt="Banana Banana" />
          </Link>

          <Cart to="/cart">
            <div>
                <strong>Meu carrinho</strong>
                <span> 3 Itens </span>
              
            </div>
            <div>
              <MdShoppingBasket size={40} color="#fff"/>
              <MdPerson size={40} color="#fff"/>
            </div>
            
          </Cart>
      </Container>
  );
}
