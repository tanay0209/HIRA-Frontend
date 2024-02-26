
import { Link } from 'react-router-dom'

function CarouselItem({ item }) {
    const { id, image, title, price } = item
    return (
        <Link
            to={`product/${id}`}>
            <div className='p-8 flex flex-col justify-center items-center'>
                <img src={image} alt=""
                    className='size-48 rounded-md'
                />
                <div
                    className='mt-2 border border-b-black'
                >{title}</div>
                <div
                    className='mt-1'
                >{price}</div>
            </div></Link>

    )
}

export default CarouselItem
