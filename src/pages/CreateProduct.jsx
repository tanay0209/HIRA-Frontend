import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../components'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux';
function CreateProduct() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset, control } = useForm()
    const dispatch = useDispatch()
    const [images, setImages] = useState([]);

    const handleImageChange = (e, onChange) => {
        const selectedImages = Array.from(e.target.files);
        const selectedFiles = Array.from(selectedImages);
        onChange(selectedFiles);
        setImages(selectedImages);
    };

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, newIndex) => {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData('index');
        const updatedImages = [...images];
        const draggedImage = updatedImages[draggedIndex];
        updatedImages.splice(draggedIndex, 1);
        updatedImages.splice(newIndex, 0, draggedImage);
        setImages(updatedImages);
    };


    const onSubmit = (data) => {
        const formData = new FormData()
        data.image.forEach((file, index) => {
            formData.append(`image${index}`, file)
        })
        reset()
        setImages([])
        console.log(data);
    }


    return (
        <AdminLayout>
            <div className='w-full ml-4'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-full gap-3'>
                    <label
                        htmlFor="productName">Product Name</label>
                    <input {...register("productName", {
                        required: "Name is required",
                    })}
                        id='productName'
                        type="text"
                        placeholder='Product Name'
                        className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.productName && <div className='text-red-500'>{errors.productName.message}</div>}
                    <label htmlFor="productDescription">Product Description</label>
                    <input {...register("productDescription", {
                        required: "Product Description is required",
                    })}
                        id='productDescription'
                        type='text'
                        placeholder='Product Description'
                        className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.productDescription && <div className='text-red-500'>{errors.productDescription.message}</div>}

                    <label htmlFor="type">Type</label>
                    <select {...register("type")} id="type" className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    {errors.type && <div className='text-red-500'>{errors.type.message}</div>}

                    <label htmlFor="category">Category</label>
                    <select {...register("category")} id="category" className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    {errors.category && <div className='text-red-500'>{errors.category.message}</div>}

                    <label htmlFor="productMarkedPrice">Marked Price</label>
                    <input {...register("productMarkedPrice", {
                        required: "Marked Price is required",
                        min: { value: 1, message: "Marked price must be greater than 0" }
                    })}
                        id='productMarkedPrice'
                        type='number'
                        placeholder='Marked Price'
                        className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.productMarkedPrice && <div className='text-red-500'>{errors.productMarkedPrice.message}</div>}

                    <label htmlFor="productSellingPrice">Selling Price</label>
                    <input {...register("productSellingPrice", {
                        required: "Selling Price is required",
                        min: { value: 1, message: "Selling price must be greater than 0" }
                    })}
                        id='productSellingPrice'
                        type='number'
                        placeholder='Selling Price'
                        className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.productSellingPrice && <div className='text-red-500'>{errors.productSellingPrice.message}</div>}

                    <label htmlFor="quantity">Quantity</label>
                    <input {...register("quantity", {
                        required: "Quantity is required",
                    })}
                        type='number'
                        placeholder='Quantity'
                        className='border rounded-md w-2/3 focus:ring-0 focus:ring-offset-0'
                        id='quantity'
                    />
                    {errors.quantity && <div className='text-red-500'>{errors.quantity.message}</div>}
                    <label htmlFor="images">{"Select and arrange the images in preferred order (upto 4 max)"}</label>

                    <Controller
                        name='image'
                        control={control}
                        rules={{
                            validate: {
                                required: value => value && value.length > 0 || "Please select at least one image",
                                maxFiles: value => value && value.length <= 4 || "You can select only up to 4 images",
                            }
                        }}
                        render={({ field: { ref, name, onChange, value } }) => (
                            <input
                                name={name}
                                ref={ref}
                                type='file'
                                max={4}
                                accept="image/jpeg, image/png"
                                id='images'
                                onChange={(e) => handleImageChange(e, onChange)}
                                multiple
                            />
                        )}
                    />
                    {errors.image && <p>{errors.image.message}</p>}

                    <div className='flex gap-4 flex-wrap justify-center items-center'>
                        {images.map((image, index) => (
                            <img
                                className='size-40'
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt={`Image ${index}`}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, index)}
                            />
                        ))}
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className='bg-primary p-2 w-2/3 text-white rounded-sm hover:bg-black transition ease-in duration-200'
                    >
                        {isSubmitting ? "Submitting" : "Create"}
                    </button>
                    {errors.root && <div className='text-red-500 text-center'>{errors.root.message}</div>}
                </form>
            </div>
        </AdminLayout>
    )
}

export default CreateProduct