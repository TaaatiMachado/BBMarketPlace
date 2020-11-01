import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Produto from '../../pages/Products';

export default () => (
    <Carousel>
        <div>
            <Produto />
        </div>
        <div>
            <Produto />
        </div>
        <div>
            <Produto />
        </div>
        <div>
            <Produto />
        </div>
    </Carousel>
);
