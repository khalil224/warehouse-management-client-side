import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { img, name, description, Price, Supplier } = product;
    console.log(product)
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h5>Price:{Price}</h5>
            <h3>Supplier: {Supplier}</h3>
            <button className='btn btn-primary'>Update</button>

        </div>
    );
};

export default Product;