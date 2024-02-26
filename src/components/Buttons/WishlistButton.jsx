
import { CiHeart } from "react-icons/ci";

function WishlistButton({ classname }) {
    return (
        <div className={`absolute right-2 bg-white rounded-full p-1 cursor-pointer  hover:shadow-md ${classname}`}>
            <CiHeart
                className='size-6' />
        </div>
    )
}

export default WishlistButton
