import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-island-59230.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, []);

    const navigate = useNavigate();
    const HandleManageInventories = () => {
        navigate('/manageinventory')
    }

    return (
        <div id='products'>
            <h2 className='text-primary mb-5'>Our Products</h2>
            <div className='container'>
                <div className='products-Container '>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
            <Stack direction='horizontal'>
                <button onClick={HandleManageInventories} className='btn btn-primary mt-5 me-5 px-4 ms-auto'>Manage Inventories</button>
            </Stack>
        </div>
    );
};

export default Products;