import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import './ManageInventories.css'

const ManageInventories = () => {

    const [products] = useProducts();

    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/addproduct')
    }

    const handleDelete = (id) => {
        const proceedDelete = window.confirm('Are you sure?');
        if (proceedDelete) {

        }
    }

    return (
        <div className='inventories-container'>
            <h2 className='text-primary fw-bold mb-5'>Products Inventory Page</h2>
            <div className='container'>

                <div className='  manage-inventory-container'>
                    {
                        products.map(product => <div key={product._id}>
                            <img src={product.img} alt="" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <h5>Price:{product.Price}</h5>
                            <h5>Quantity: {product.Quantity}</h5>
                            <h3>Supplier: {product.Supplier}</h3>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-primary'>Delete</button>
                        </div>)
                    }
                </div>
            </div>

            <button className='btn btn-primary mt-5' onClick={handleAddProduct}>Add New Product</button>
        </div>
    );
};

export default ManageInventories;