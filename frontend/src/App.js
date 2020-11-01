import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/Header'
import Routes from './routes'
import Footer from './components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
