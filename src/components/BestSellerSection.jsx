import React from 'react'
import { ProductCarousel } from '.'

function BestSellerSection() {
    return (
        <div className='mt-4'>
            <h2 className='text-center text-4xl lg:text-5xl text-primary'>Best Sellers</h2>
            <ProductCarousel className='mt-6' />
        </div>
    )
}

export default BestSellerSection
