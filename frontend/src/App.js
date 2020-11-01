import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Routes from './routes'
import Footer from './components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <Footer/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
