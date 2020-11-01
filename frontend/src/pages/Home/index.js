import React from 'react';
import Banner from '../../assets/img/banner.PNG'
import HomeCarousel from '../../components/carrousel/carrousel'

export default function Home() {
    return (
    <div>
      <img className="banner" src={Banner} alt="banner"></img>
      <h2 className='titulo-sec'>DESTAQUES</h2>
      <HomeCarousel/>
      <h2 className='titulo-sec'>MAIS VENDIDOS</h2>
      <HomeCarousel/>
      <h2 className='titulo-sec'>ÚLTIMAS VISUALIZAÇÕES</h2>
      <HomeCarousel/>
    </div>
)};




