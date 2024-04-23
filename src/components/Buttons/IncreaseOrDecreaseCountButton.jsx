import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity } from "../../store/cartSlice"


function IncreaseOrDecreaseCountButton({ quantity, id }) {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center justify-between text-xl mt-4'>
            <button
                onClick={() => dispatch(decreaseQuantity(id))}
                className='border border-black px-4 rounded-sm text-center font-bold text-black'
            >
                -
            </button>
            <p>{quantity}</p>
            <button
                onClick={() => dispatch(increaseQuantity(id))}
                className='rounded-sm px-4 border border-black text-center font-bold text-black'
            >
                +
            </button>

        </div>
    )
}

export default IncreaseOrDecreaseCountButton
