import React, { useEffect, useState } from 'react'
import { Button, CartItem, Coupons, Layout } from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Cart() {
    const navigate = useNavigate()
    let cartItems = useSelector(state => state.cart.cartItems)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const currentUser = localStorage.getItem('user')
        if (!currentUser) {
            navigate('/login')
            return
        }
        const amount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        setTotal(amount)
    }, [cartItems])

    return (
        <Layout>
            <h2 className='text-4xl uppercase font-semibold p-4 text-center md:text-left'>Shopping Cart</h2>
            <div className='flex flex-col lg:flex-row mt-4'>
                {/* Order Details */}
                <div className='md:w-2/3 w-full mr-4'>
                    {cartItems.length > 0 ? cartItems.map(item => <CartItem key={item.id} product={item} />) : <h1 className='ml-4'>Add some items to the cart</h1>}
                </div>
                {/* Total Container */}
                <div className='md:w-1/3 w-full mt-4 md:mt-0 p-4 border border-black rounded-md flex flex-col justify-around h-[22rem]'>
                    <p className='text-center text-3xl'>Order Summary</p>
                    <p className='mt-4 text-2xl font-semibold'>Total: {total} Rs</p>
                    {/* <div className='my-4 w-full overflow-x-auto'>
                        <Coupons />
                    </div> */}
                    <Button text={'Checkout Securely'} />
                </div>
            </div>
        </Layout>
    )
}

export default Cart
