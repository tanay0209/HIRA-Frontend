import React from 'react'

function Coupon({ title, description }) {
    return (
        <div className='flex flex-col border-2 p-4 justify-center items-center gap-2 text-center shadow-md rounded-sm cursor-pointer w-1/4'>
            <h3 className='font-bold'>{title}</h3>
            <p className='text-sm text-gray-400'>{description}</p>
        </div>
    )
}

export default Coupon
