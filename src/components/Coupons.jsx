import React from 'react'
import { Coupon } from '../components'

const coupons = [{
    title: 'SAVE 500',
    description: 'Above 1799'
}, {
    title: 'SAVE 500',
    description: 'Above 1799'
},
{
    title: 'SAVE 500',
    description: 'Above 1799'
}, {
    title: 'SAVE 500',
    description: 'Above 1799'
}, {
    title: 'SAVE 500',
    description: 'Above 1799'
},
]


function Coupons() {
    return (
        <div className='flex gap-2'>
            {coupons.map((coupon, index) => {
                return <Coupon title={coupon.title} description={coupon.description} key={index} />
            })}
        </div>
    )
}

export default Coupons
