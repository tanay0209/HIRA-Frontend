import React from 'react'
function ProductSpeciality({ icon, title }) {
    return (
        <div className='flex p-2'>
            <div>
                {icon}
            </div>
            <div className='font-medium'>{title}</div>
        </div>
    )
}

export default ProductSpeciality
