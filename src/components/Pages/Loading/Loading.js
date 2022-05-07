import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='w-100'>
            <Spinner animation="border" variant="dark" />
        </div>
    );
};

export default Loading;