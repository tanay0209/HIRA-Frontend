import React from 'react'
import { Button, CartItem, Layout } from '../components';
import background from '../assets/images/category_background.jpg';

const product = {
    id: 1,
    title: 'product',
    quantity: 4,
    price: 500,
    image: background
}

function Cart() {
    return (
        <Layout>
            <h2 className='text-4xl uppercase font-semibold p-4 text-center md:text-left'>Shopping Cart</h2>
            <div className='flex flex-col lg:flex-row mt-4'>
                {/* Order Details */}
                <div className='md:w-2/3 w-full mr-4'>
                    <CartItem product={product} />
                    {/* <CartItem />
                    <CartItem />
                    <CartItem /> */}
                </div>
                {/* Total Container */}
                <div className='md:w-1/3 w-full mt-4 md:mt-0 p-4 border border-black rounded-md flex flex-col justify-around h-48'>
                    <p className='text-center text-3xl'>Order Summary</p>
                    <p className='mt-4 text-2xl font-semibold'>Total: 2333</p>
                    <Button text={'Checkout Securely'} />
                </div>
            </div>
        </Layout>
    )
}

export default Cart
