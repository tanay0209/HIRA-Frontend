import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { Button, WishlistButton } from "../../components"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

function CollectionItem({ product, isWishlistItem = false }) {
    const dispatch = useDispatch()
    let [inCart, setInCart] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)

    const addProductToCart = () => {
        dispatch(addToCart(product))
        setPresentInCart(true)
    }

    useEffect(() => {
        const isInCart = cartItems.some(item => item.id === product.id)
        setInCart(isInCart)
    }, [cartItems, product])

    const addProductToWishlist = (event) => {
        // event.stopPropagation();
        dispatch(addToWishlist(product));
    };
    return (
        <div>
            <Link
                to={`/product/${product.title}`}
                state={{ productDetails: product }}
            >
                <div className='bg-gray-200 flex flex-col relative z-4'>
                    {/* Image Container */}
                    <div className='relative h-2/3'>
                        <img src={product.image}
                            className='h-full w-full'
                            alt="" />
                    </div>
                    {/* Wishlist Button */}
                    {/* {isWishlistItem ?
                        <WishlistButton
                            callback={addProductToWishlist}
                            isWishlistItem={true}
                            product={product} classname='top-4'
                        /> :
                        <WishlistButton
                            callback={addProductToWishlist}
                            classname={'top-4'}
                            product={product} />} */}
                    {/* Details Container */}
                    <div className='h-1/2 p-3'>
                        <p>{product.title}</p>
                        <p>&#x20b9; {product.price}</p>
                    </div>

                </div>
                {/* Add to Cart Button */}

            </Link >
            {inCart ? <Button text={'Already in Cart'} disabled={true} /> : <Button callback={addProductToCart} text={'Add to Cart'} disabled={false} />}
        </div>

    )
}

export default CollectionItem
