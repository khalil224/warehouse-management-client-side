import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ExtraSectionOne.css'
import one from '../../../Images/one.png'
import two from '../../../Images/two.png'
import three from '../../../Images/three.png'

const ExtraSectionOne = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 text-primary'>Joining Warehouse Mobile Is Surprisingly  Easy</h2>
            <div className='second-section'>

                <div className='extra-part'>
                    <div >

                        <img src={one} alt="" />

                        <h2 className='fw-bold'>Add your SIM</h2>
                        <p className='fw-bold fs-6'>Insert your Warehouse Mobile SIM then call 800 from your mobile to activate it</p>
                    </div>
                </div>



                <div className='extra-part'>
                    <div >

                        <div><img src={two} alt="" /></div>
                        <div>
                            <h2 className='fw-bold'>Login in</h2>
                            <p className='fw-bold fs-6'>Log in to your Warehouse Management Dashboard to start the transfer</p>
                        </div>


                    </div>
                </div>
                <div className='extra-part'>

                    <div >
                        <div><img src={three} alt="" /></div>
                        <div>
                            <h2 className='fw-bold'>Fill out a form
                            </h2>
                            <p className='fw-bold fs-6 '>
                                Fill out the form and we'll do the rest. It takes a few hours to change and your number will be on our network within two working days.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ExtraSectionOne;