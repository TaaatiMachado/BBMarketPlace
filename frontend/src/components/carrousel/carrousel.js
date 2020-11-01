import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Produto from '../../pages/Products';
import './style.css'

export default () => (
    <Carousel>
        <div className="p-list">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

        </div>
        <div className="p-list">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

        </div>
        <div className="p-list">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

        </div>
 
    </Carousel>
);
