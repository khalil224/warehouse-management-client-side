
import React from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
    }

    if (user) {

    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/home')

    }

    return (
        <div className='register-form '>
            <h2 className='text-primary mb-3 fw-bolder fs-1'>REGISTRATION</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name='email' placeholder='Email Address' required />
                <input type="password" name='password' placeholder='Password' required />

                <Button variant="primary" type="submit" >
                    Register
                </Button>
            </form>
            <p className='mt-3'>Already Have an Account? <span className='text-primary ' style={{ cursor: 'pointer' }} onClick={navigateToLogin}>Login Account</span></p>
        </div>
    );
};

export default Register;