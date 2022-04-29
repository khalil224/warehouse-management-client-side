import React from 'react';
import './Banner.css'

import banner1 from '../../../Images/realme-2-pro.png'
import banner2 from '../../../Images/Realme 5 Pro.png'
import banner3 from '../../../Images/oppo-a7x.png'
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    return (
        <div className='mt-5 mb-5'>
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
        </div>
    );
};

export default Banner;