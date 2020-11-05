import React from 'react';
import { Card } from 'react-bootstrap';
import Banner from '../../assets/img/banner.PNG'
import HomeCarousel from '../../components/carrousel/carrousel'
import logo from '../../assets/img/IMG_3520.PNG'
import {MdLocalOffer} from 'react-icons/md'

export default function Home() {
    return (
    <div>
      <img className="banner pr-5 pl-5 pt-5" src={Banner} alt="banner"></img>
      <Card className="m-5">
      <h2 className='titulo-sec'>DESTAQUES</h2>
      <HomeCarousel/>
      </Card>

      <Card className="m-5">
        <Card.Body className="d-flex justify-content-around">
            <img src={logo} className="logo"/>
            <p className="m-5 text-justify">Somos a primeira Hortifruti 100% online. Criamos um jeito diferente de oferecer o frescor das feiras com a praticidade dos grandes mercados, tudo ao alcance de um clique! E nosso compromisso é levar sempre até a sua mesa o que a natureza tem de melhor, com frutas, legumes e verduras fresquinhos dos nossos produtores parceiros e o sorriso que não pode faltar. </p>
       </Card.Body>
      </Card>

      <Card className="m-5">
      <h2 className='titulo-sec'>MAIS VENDIDOS</h2>
      <HomeCarousel/>
      </Card>

      <Card className="m-5">
        <Card.Body className="d-flex justify-content-around">
            <img src={"https://d3o3bdzeq5san1.cloudfront.net/22/21595.svg"} alt="..." class="img-thumbnail"/>
            <img src={"https://d3o3bdzeq5san1.cloudfront.net/22/21590.svg"} alt="..." class="img-thumbnail"/>
            <img src={"https://d3o3bdzeq5san1.cloudfront.net/22/21584.svg"} alt="..." class="img-thumbnail"/>
            <img src={"https://d3o3bdzeq5san1.cloudfront.net/22/21586.svg"} alt="..." class="img-thumbnail"/>
            <img src={"https://d3o3bdzeq5san1.cloudfront.net/22/21588.svg"} alt="..." class="img-thumbnail"/>
            <img src={"https://d3o3bdzeq5san1.cloudfront.net/22/21585.svg"} alt="..." class="img-thumbnail"/>
       </Card.Body>
      </Card>

      <Card className="m-5">
      <h2 className='titulo-sec'>ÚLTIMAS VISUALIZAÇÕES</h2>
      <HomeCarousel/>
      </Card>
    </div>
)};




