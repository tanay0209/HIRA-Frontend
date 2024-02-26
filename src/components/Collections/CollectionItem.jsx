import React from 'react'

import { Link } from 'react-router-dom';
import { Button, IncreaseOrDecreaseCountButton, WishlistButton } from "../../components"


function CollectionItem({ item }) {
    let count = 0;
    const { id, title, image, price } = item
    return (
        <Link
            to={`/product/${title}`}
            state={{ productDetails: item }}
        >
            <div className='bg-white flex flex-col relative z-4'>
                {/* Image Container */}
                <div className='relative h-2/3'>
                    <img src={image}
                        className='h-full w-full'
                        alt="" />
                </div>
                {/* Wishlist Button */}
                <WishlistButton classname={'top-4'} />
                {/* Details Container */}
                <div className='h-1/2 p-3'>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
                {/* Add to Cart Button */}
                {count === 0 ? <Button text={'Add to Cart'} /> : <Button text={'Added to Cart'} />}
            </div></Link >
    )
}

export default CollectionItem
