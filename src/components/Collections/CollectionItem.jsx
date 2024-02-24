import React from 'react'

import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';


function CollectionItem({ title, price, image }) {
    return (
        <Link
            to={`/product/${title}`}
        >
            <div className='bg-white flex flex-col'>
                {/* Image Container */}
                <div className='relative h-2/3'>
                    <img src={image}
                        className='h-full w-full'
                        alt="" />
                    {/* Wishlist Button */}
                    <div className='absolute top-4 right-2 bg-white rounded-full p-1 cursor-pointer  hover:shadow-md'>
                        <CiHeart
                            className='size-6' />
                    </div>

                </div>
                {/* Details Container */}
                <div className='h-1/2 p-3'>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
                {/* Add to Cart Button */}
                <button className='w-full h-1/2 p-2  cursor-pointer bg-primary text-white hover:bg-secondary transition-all duration-200'>Add To Cart</button>
            </div></Link>
    )
}

export default CollectionItem
