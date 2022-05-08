import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='add-product-container'>
            <h2>add your product</h2>
            <div className='w-50 mx-auto'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2 rounded' placeholder='Description' {...register("description")} />
                    <input className='mb-2 rounded' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2 rounded' placeholder='photo URL' type="text" {...register("img")} />
                    <input className='mb-2 rounded' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-2 rounded' placeholder='Supplier Name' type="text" {...register("supplier name")} />
                    <input className=' rounded' type="submit" value="Add Product" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;