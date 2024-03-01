import React from 'react'
import { IncreaseOrDecreaseCountButton, Button } from '../components'
function CartItem({ product }) {
    const { id, title, quantity, price, image } = product
    return (
        <div className='flex justify-around border border-black items-center rounded-sm p-4 md:w-full w-full mb-4'>
            {/* Image Container */}
            <div className='md:w-2/6 w-1/2'>
                <img src={image}
                    alt="title" />
            </div>
            {/* Details Container */}
            <div className='flex flex-col md:w-4/6 w-1/2 ml-4 h-full justify-between'>
                <p className='uppercase text-xl'>
                    {title}
                </p>
                <p className='text-2xl font-bold text-gray-500'>{price}</p>
                <div className='w-full md:w-1/3'>
                    <IncreaseOrDecreaseCountButton quantity={quantity} />
                </div>
                {/* Buttons */}
                <div className='flex flex-col md:flex-row gap-2 mt-4 '>
                    <Button className='w-full md:w-1/2' text={'Remove'} />
                    <Button className='w-1/2' text={'Add to Wishlist'}></Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
