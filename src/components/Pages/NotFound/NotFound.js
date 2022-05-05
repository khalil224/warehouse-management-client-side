import React from 'react';
import './NotFound.css'

import notfound from '../../../Images/404.png'

const NotFound = () => {
    console.log(notfound)
    return (
        <div className='notfound-container'>
            <img src={notfound} alt="" />

        </div>
    );
};

export default NotFound;