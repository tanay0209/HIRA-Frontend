import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Buttons'
import background from '../assets/images/category_background.jpg';

function OrderItem() {
    return (
        <div className='flex flex-col border-2 border-black rounded-md p-4 mx-4 md:mx-0 mb-4'>
            {/* Order Details */}
            <div className='flex justify-between'>
                {/* Date */}
                <div>
                    <p>Order Placed</p>
                    <p>Date</p>
                </div>
                {/* total */}
                <div>
                    <p>Total</p>
                    <p>Amount</p>
                </div>
                {/* Address */}
                <div>
                    <p>Shipped to</p>

                    <p className='relative group'>
                        address v
                        <p className='absolute p-2 text-sm md:w-64 w-56 border-2 border-black rounded-sm top-18 group-hover:block shadow-md
                            hidden bg-gray-300
                            '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis soluta modi quidem incidunt veritatis!
                        </p>
                    </p>
                </div>
                {/*  View order details and invoice number */}
                <div>
                    <p>Invoice Number</p>
                    <Button text={'Order details'} />
                </div>
            </div>
            {/* Product Details */}
            <div className='flex w-full mt-4 justify-center items-center'>
                <div className='md:w-1/4 w-1/3'>
                    <img
                        src={background}
                        alt=''
                    />
                </div>
                <div className='w-full ml-4'><Link
                    // to='/product/name'
                    // state={{ productDetails: item }}
                    to='/'
                >Name</Link></div>
            </div>
        </div>
    )
}

export default OrderItem
