import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import { ProductList } from './styles';


export default function Produto() {
  return (
    <ProductList>
      {/* itens esticos para teste */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" 
        alt="Fone JBL"/>
      
      <strong>Fone JBL</strong>
      <span>R$ 50000,00</span>
      
      <button type="button">
        <div>
        <MdAddShoppingCart size={16} color="FFF"/>
        </div>

        <span>COMPRAR</span>
      </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" alt="FONE JBL "/>
     
      <strong>Fone JBL </strong>
      <span>R$ 2700,00</span>
      
      <button type="button">
        <div>
        <MdAddShoppingCart size={16} color="FFF"/>
        </div>

        <span>COMPRAR</span>
      </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" alt="PS5"/>
      
      <strong>Fone JBL</strong>
      <span>R$ 270,00</span>
      
      <button type="button">
        <div>
        <MdAddShoppingCart size={16} color="FFF"/>
        </div>

        <span>COMPRAR</span>
      </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" alt="PS5"/>
      
      <strong>Fone JBL</strong>
      <span>R$ 270,00</span>
      
      <button type="button">
        <div>
        <MdAddShoppingCart size={16} color="FFF"/>
        </div>

        <span>COMPRAR</span>
      </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/fone-de-ouvido-bluetooth-jbl-tune-500bt/06/N26-0303-006/N26-0303-006_zoom2.jpg?ts=1587489105&ims=326x" alt="PS5"/>
      
      <strong>Fone JBL</strong>
      <span>R$ 270,00</span>
      
      <button type="button">
        <div>
        <MdAddShoppingCart size={16} color="FFF"/>
        </div>

        <span>COMPRAR</span>
      </button>
      </li>

    </ProductList>
  )
}

