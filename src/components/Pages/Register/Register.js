
import React from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='register-form '>
            <h2 className='text-primary mb-3'>Registration</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name='email' placeholder='Email Address' required />
                <input type="password" name='password' placeholder='Password' />
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </form>
            <p>Already Have an Account? <span className='text-primary ' style={{ cursor: 'pointer' }} onClick={navigateToLogin}>Login here</span></p>
        </div>
    );
};

export default Register;