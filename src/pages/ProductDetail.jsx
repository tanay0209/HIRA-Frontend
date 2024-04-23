import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductCarousel, Button, ProductSpeciality, WishlistButton, Layout, OutlineButton, Coupons, StarRating } from '../components'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import { addToWishlist } from '../store/wishlistSlice';
import authentic from "../assets/services/authentic.png"
import delivery from "../assets/services/delivery.png"
import guarantee from "../assets/services/guarantee.png"
import return30 from "../assets/services/return30.png"



function ProductDetail() {
    const dispatch = useDispatch()
    const { state } = useLocation()
    const product = state.productDetails
    const [giftWrap, setGiftWrap] = useState(false)
    const [inCart, setInCart] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)

    useEffect(() => {
        const isInCart = cartItems.some(item => item.id === product.id)
        setInCart(isInCart)
    }, [cartItems, product])

    const addProductToCart = () => {
        dispatch(addToCart(product))
        setInCart(true)
    }

    return (
        <Layout>
            <div className='grid md:grid-cols-2 gap-4'>
                {/* Left Container holding Image */}
                <div className=' relative'>
                    {/* For Primary Image */}
                    <div className='grid place-items-center'>
                        <img
                            className='w-full p-4'
                            src={product.image} alt="" />
                    </div>
                    {/* For other images */}
                    {/* <div className='flex w-full gap-2 mt-4'>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                    </div> */}
                </div>


                {/* Right Container holding details */}
                <div className='ml-4 flex flex-col gap-4 justify-around lg:gap-0'>
                    <div className='flex  flex-col gap-4 lg:gap-8'>
                        <div className='flex justify-between relative'>
                            <div className='text-xl'>{product.title}</div>
                            <WishlistButton product={product} callback={() => dispatch(addToWishlist(product))} />
                        </div>
                        <div className='flex'>
                            <div className='text-lg font-bold text-gray-600'>
                                &#x20b9; {product.price}
                            </div>
                            <span className='ml-2'>(Incl. of all taxes)</span>
                        </div>
                        <div className='text-gray-400 font-bold'>
                            Made with 925 Silver
                        </div>
                        {/* Product Speiciality */}
                        <div className='grid grid-cols-2 gap-4 grid-rows-2 w-full'>
                            <ProductSpeciality image={return30} title={'Easy 30 Day Return'} />

                            <ProductSpeciality image={delivery} title={'Delivery Across India'} />

                            <ProductSpeciality image={guarantee} title={'6 Month Warranty'} />

                            <ProductSpeciality image={authentic} title={'Lifetime Plating'} />
                        </div>

                        {/* Add Gift Wrap */}
                        {/* <div className='flex items-center'>
                            <input type="checkbox"
                                className='ml-2 focus:ring-0 focus:ring-offset-0'
                                onClick={() => setGiftWrap(!giftWrap)}
                            />
                            <p className='ml-4'>Add Gift wrap for Rs. 50</p>
                        </div> */}
                    </div>

                    {/* Buttons */}
                    <div className='flex gap-x-2 mt-4'>
                        <OutlineButton text={'Try Now'} />
                        <Button
                            disabled={inCart}
                            text={inCart ? 'Already in Cart' : 'Add to Cart'}
                            callback={addProductToCart} />
                    </div>

                    {/* Coupons */}
                    {/* <div className='mt-4 w-full overflow-x-auto'>
                        <Coupons />
                    </div> */}

                    {/* Reviews */}
                    {/* <div className='flex flex-col mt-4 gap-2'>
                        <h2 className='text-center text-2xl'>Customer Reviews</h2>
                        <div className='flex items-center text-base'>
                            <StarRating rating={5} />
                            <p className='ml-4'>99+ Reviews</p>
                        </div>
                        <OutlineButton text={'Add a review'} />
                        {/* Customer Reviews */}
                    {/* <div className='grid grid-cols-3'></div>
                    </div>  */}

                    {/* Similar Products */}
                    {/* <div className='mt-8 hidden lg:block'>
                        <h2 className='text-center text-3xl font-bold text-secondary'>Similar Products</h2>
                        <div>
                            <ProductCarousel duration={2000} />
                        </div>
                    </div> */}

                    {/* Frequently Bought Together */}
                    <div className='mt-8 hidden lg:block'>
                        <h2 className='text-center text-3xl font-bold text-secondary'>Frequently bought Together</h2>
                        <div>
                            <ProductCarousel useReplace={true} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Similar Products */}
            <div className='mt-8 lg:hidden w-full'>
                <h2 className='text-center text-3xl font-bold text-secondary'>Similar Products</h2>
                <div>
                    <ProductCarousel duration={2000} />
                </div>
            </div>

            {/* Frequently Bought Together */}
            {/* <div className='mt-8 lg:hidden w-full'>
                <h2 className='text-center text-3xl font-bold text-secondary'>Frequently bought Together</h2>
                <div>
                    <ProductCarousel />
                </div>
            </div> */}
        </Layout>
    )
}

export default ProductDetail
