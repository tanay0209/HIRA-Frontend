import React from 'react'

import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AddToCartButton, IncreaseOrDecreaseCountButton } from "../../components"


function CollectionItem({ title, price, image }) {
    let count = 0;
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
                {count === 0 ? <AddToCartButton /> : <IncreaseOrDecreaseCountButton />}
            </div></Link>
    )
}

export default CollectionItem
