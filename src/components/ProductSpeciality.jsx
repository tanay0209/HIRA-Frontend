import React from 'react'
function ProductSpeciality({ image, title }) {
    return (
        <div className='flex p-2  items-center'>
            <div>
                <img
                    className='size-8 mr-4'
                    src={image} alt="" />
            </div>
            <div className='font-medium'>{title}</div>
        </div>
    )
}

export default ProductSpeciality
