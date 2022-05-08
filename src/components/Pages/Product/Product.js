import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, Quantity, img, name, description, Price, Supplier } = product;
    const navigate = useNavigate()
    const navigateToProductDetail = id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h5>Price:{Price}</h5>
            <h5>Quantity: {Quantity}</h5>
            <h3>Supplier: {Supplier}</h3>
            <button className='btn btn-primary' onClick={() => navigateToProductDetail(_id)}>Update</button>

        </div>
    );
};

export default Product;