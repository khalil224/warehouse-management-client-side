import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ExtraSectionOne.css'
import one from '../../../Images/one.png'
import two from '../../../Images/two.png'
import three from '../../../Images/three.png'

const ExtraSectionOne = () => {
    return (
        <div>
            <h1 className='mt-5 text-primary'>JOINING WAREHOUSE <br /> MOBILE IS SURPRISINGLY <br /> EASY</h1>
            <div className='middle-container'>

                <div className='extra-part'>
                    <div >

                        <img src={one} alt="" />

                        <h2 className='fw-bold'>Get a SIM</h2>
                        <p className='fw-bold fs-5'>Buy a new SIM from The Warehouse or Warehouse Stationery and pop it in your phone</p>
                    </div>
                </div>



                <div className='extra-part'>
                    <div >

                        <div><img src={two} alt="" /></div>
                        <div>
                            <h2 className='fw-bold'>Get a phone</h2>
                            <p className='fw-bold fs-5'>Bring your phone with you or buy a new one from The Warehouse or Warehouse Stationery.</p>
                        </div>


                    </div>
                </div>
                <div className='extra-part'>

                    <div >
                        <div><img src={three} alt="" /></div>
                        <div>
                            <h2 className='fw-bold'>Get going
                            </h2>
                            <p className='fw-bold fs-5'>Call 800 and follow the prompts, top up, and you're all set to go

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ExtraSectionOne;