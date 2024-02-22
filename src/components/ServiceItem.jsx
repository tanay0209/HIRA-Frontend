import React from 'react'

function ServiceItem({ title, description, image }) {
    return (
        <div className='lg:w-1/3 w-full flex text-center items-center justify-center m-auto max-w-md p-4 '>
            {/* icon */}
            <div className='lg:w-1/2 w-full flex justify-center'>
                <img src={image} alt="Image" className='lg:h-32 object-cover' />
            </div>
            {/* Information */}
            <div className='p-3 lg:w-1/2'>
                <p className='text-lg text-secondary font-semibold'>{title}</p>
                <p className='font-thin text-sm mt-1 text-tertiary'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceItem
