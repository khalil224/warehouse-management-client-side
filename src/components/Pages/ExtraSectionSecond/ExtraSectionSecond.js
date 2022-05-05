import React from 'react';
import './ExtraSectionSecond.css'
import one from '../../../Images/one(2).jpg'
import two from '../../../Images/two(2).png'
import three from '../../../Images/three(2).png'

const ExtraSectionSecond = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 text-primary'>Want to keep your mobile number?</h2>
            <div className='third-section'>

                <div className='extra-part'>
                    <div >

                        <img src={one} alt="" />

                        <h2 className='fw-bold'>Get a SIM</h2>
                        <p className='fw-bold fs-6 text-secondary'>Buy a new SIM from The Warehouse or Warehouse Stationery and pop it in your phone</p>
                    </div>
                </div>



                <div className='extra-part'>
                    <div >

                        <div><img src={two} alt="" /></div>
                        <div>
                            <h2 className='fw-bold'>Get a phone</h2>
                            <p className='fw-bold fs-6 text-secondary'>Bring your phone with you or buy a new one from The Warehouse or Warehouse Stationery.</p>
                        </div>


                    </div>
                </div>
                <div className='extra-part'>

                    <div >
                        <div><img src={three} alt="" /></div>
                        <div>
                            <h2 className='fw-bold'>Get going
                            </h2>
                            <p className='fw-bold fs-6 text-secondary'>Call 800 and follow the prompts, top up, and you're all set to go

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ExtraSectionSecond;