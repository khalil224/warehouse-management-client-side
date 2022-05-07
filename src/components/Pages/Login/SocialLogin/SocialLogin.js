import React from 'react';
import './SocialLogin.css'
import google from '../../../../Images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let Error;
    if (error) {
        Error = <p className='text-danger'>Error: {error.message}</p>

    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>
            {Error}
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-secondary '>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2 '>Continue With Google </span></button>
        </div>
    );
};

export default SocialLogin;