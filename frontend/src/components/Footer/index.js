import React from 'react';
import logo from '../../assets/img/IMG_3521.PNG'
import "./styles.css"


// componente Header da pagina 
export default function Header() {
  return (
      <div className="container-foot">
        <img src={logo} className="bnn"/>
      </div>
  );
}
