import React from 'react';
import logo from '../../assets/img/IMG_3521.PNG'
import "./foot-styles.css"


// componente Header da pagina 
export default function Header() {
  return (
      <div className="d-flex justify-content-around align-items-center p-2 container-foot">
        <a href="/vendas">canal de vendas</a>
        <a href="/bnnCard">banana card</a>
        <a href="/digital">banana digital</a>
        <a href="guiaSeg">guia de segurança</a>
        <a href="anuncie">anuncie</a>
        <a href="vendas">venda com a gente</a>
        <img src={logo} className="bnn" href="/"/>
 
      </div>
  );
}
