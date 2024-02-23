import React from 'react'
import { BestSellerCarousel } from './'

function BestSellerSection() {
    return (
        <div className='mt-4 h-96'>
            <h2 className='text-center text-4xl lg:text-5xl text-primary'>Best Sellers</h2>
            <BestSellerCarousel />
        </div>
    )
}

export default BestSellerSection
