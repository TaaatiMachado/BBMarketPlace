import React from 'react';
import Banner from '../../assets/img/banner.PNG'
import HomeCarousel from '../../components/carrousel/carrousel'

export default function Home() {
    return (
    <div>
      <img src={Banner} alt="banner"></img>
      <h2>DESTAQUES</h2>
      <HomeCarousel/>
      <h2>MAIS VENDIDOS</h2>
      <HomeCarousel/>
      <h2>ÚLTIMAS VISUALIZAÇÕES</h2>
      <HomeCarousel/>
    </div>
)};




