import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventories.css'

const ManageInventories = () => {

    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/addproduct')
    }

    return (
        <div>
            <h2>this is manage inventory page</h2>
            <button onClick={handleAddProduct}>Add New Product</button>
        </div>
    );
};

export default ManageInventories;