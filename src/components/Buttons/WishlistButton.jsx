
import { CiHeart } from "react-icons/ci";

function WishlistButton({ classname = '', isWishlistItem }) {
    return (
        <div className={`absolute right-2 bg-white rounded-full p-1 cursor-pointer hover:shadow-md ${classname}`}>
            <CiHeart
                color={isWishlistItem ? 'red' : ''}
                className='size-6' />
        </div>
    )
}

export default WishlistButton
