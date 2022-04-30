import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';


import Products from '../Products/Products';

const Home = () => {



    return (
        <div className='mt-3'>
            <h2 className='text-primary'>Welcome to Our Mobile Mart</h2>
            <Banner></Banner>
            <Products></Products>
            <ExtraSectionOne></ExtraSectionOne>
        </div>
    );
};

export default Home;