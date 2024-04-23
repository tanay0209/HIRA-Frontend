
import { Link } from 'react-router-dom'

function CarouselItem({ product, useReplace = false }) {
    return (
        <Link
            replace={useReplace}
            to={`/product/${product.title}`}
            state={{ productDetails: product }}
        >
            <div className='p-8 flex flex-col justify-center items-center text-center'>
                <img src={product.image} alt=""
                    className='size-48 rounded-md'
                />
                <div
                    className='mt-2 border-b-2 border-black'
                >{product.title}</div>
                <div
                    className='mt-1'
                >{product.price}</div>
            </div></Link>

    )
}

export default CarouselItem
