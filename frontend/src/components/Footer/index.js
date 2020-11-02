import React from 'react';
import logo from '../../assets/img/IMG_3521.PNG'
import "./foot-styles.css"


// componente Header da pagina 
export default function Header() {
  return (
      <div className="container-foot">
        <a href="#">canal de vendas</a>
        <a href="#">banana card</a>
        <a href="#">banana digital</a>
        <a href="#">guia de segurança</a>
        <a href="#">anuncie</a>
        <a href="#">venda com a gente</a>
        <img src={logo} className="bnn"/>
 
      </div>
  );
}
