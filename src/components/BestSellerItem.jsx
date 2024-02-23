import React from 'react'

function BestSellerItem({ image, title, price }) {
    return (
        <div className='p-8 flex flex-col justify-center items-center'>
            <img src={image} alt=""
                className='size-48 rounded-md'
            />
            <div
                className='mt-2 border border-b-black'
            >{title}</div>
            <div
                className='mt-1'
            >{price}</div>
        </div>

    )
}

export default BestSellerItem
