import React from 'react';
import './Banner.css'

import banner1 from '../../../Images/Walton Pro.png'
import banner2 from '../../../Images/Samsung .png'
import banner3 from '../../../Images/realme5 pro2.png'
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img src={banner1} alt="" />

            </Carousel.Item>
            <Carousel.Item>
                <img

                    src={banner2}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item>
                <img

                    src={banner3}
                    alt=""
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;