import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Produto from '../../pages/Products';

export default () => (
    <Carousel>
        <div className="d-flex">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

        </div>
        <div className="d-flex">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

        </div>
        <div className="d-flex">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

        </div>
 
    </Carousel>
);
