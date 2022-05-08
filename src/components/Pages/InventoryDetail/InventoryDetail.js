import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id, name } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='inventory-detail'>
            <h2 className='text-primary fw-bold mb-5'>Welcome to Inventory Details Page </h2>
            <h2>{product.name}</h2>
        </div>
    );
};

export default InventoryDetail;