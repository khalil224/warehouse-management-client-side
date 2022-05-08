import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <div className='footer-dark'>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><Link to="/">Bd Mobile Mart</Link></li>
                                <li><Link to="#">Team</Link></li>
                                <li><Link to="#">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Bd Mobile Mart</h3>
                            <p>Bd mobile mart is a new warehouse.Our commit to servive best product to the user.Welcome to our Bd Mobile Mart</p>
                        </div>

                    </div>
                    <p><small>Copyright @{year}</small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;