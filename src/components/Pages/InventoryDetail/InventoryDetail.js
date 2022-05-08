import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id, name } = useParams();
    const [product, setProduct] = useState({});
    const [itemQuantity, setItemQuantity] = useState()

    useEffect(() => {
        const url = `https://still-island-59230.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleDelivered = (itemQuantity) => {
        console.log(itemQuantity);
        const count = (itemQuantity - 1);
        const update = { count };
        const url = `https://still-island-59230.herokuapp.com/product/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => setItemQuantity(parseInt(data.count)))

    };


    return (
        <div className='inventory-detail mx-auto'>
            <h2 className='text-primary fw-bold mb-5'>Welcome to Inventory Details Page </h2>
            <div >

                <img src={product.img} alt="" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h5>Price:{product.Price}</h5>
                <h5>Quantity: {product.Quantity}</h5>
                <h3>Supplier: {product.Supplier}</h3>
                <button onClick={() => handleDelivered(product.Quantity)} className='btn btn-primary'>Delivered</button>
            </div>
        </div>
    );
};

export default InventoryDetail;