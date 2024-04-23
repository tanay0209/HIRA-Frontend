import { useState, useEffect } from 'react'
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

function WishlistButton({ classname = '', product, callback = () => { } }) {
    let [wishlisted, setWishlishted] = useState(false)
    const wishlistItems = useSelector(state => state.wishlist.wishlistedItems)

    useEffect(() => {
        const inWishlist = wishlistItems?.some(item => item.id === product?.id)
        setWishlishted(inWishlist)
    }, [wishlistItems, product])


    return (
        <button
            onClick={callback}
            className={`absolute right-2 bg-white rounded-full p-1 cursor-pointer hover:shadow-md ${classname}`}>
            <CiHeart
                color={wishlisted ? 'red' : ''}
                className='size-6' />
        </button>
    )
}

export default WishlistButton
