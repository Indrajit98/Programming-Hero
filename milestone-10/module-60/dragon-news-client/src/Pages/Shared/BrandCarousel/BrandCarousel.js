import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../asset/brands/Brand1.png';
import brand2 from '../../../asset/brands/Brand2.png';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default BrandCarousel;