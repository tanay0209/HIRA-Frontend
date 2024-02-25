import React from 'react'

function IncreaseOrDecreaseCountButton() {
    return (
        <div className='w-full p-3 flex items-center justify-between text-xl'>
            <button className='bg-primary rounded-md w-1/3 py-2 text-center font-bold text-black'>+</button>
            <p>4</p>
            <button className='bg-primary rounded-md w-1/3 py-2 text-center font-bold text-black'>-</button>
        </div>
    )
}

export default IncreaseOrDecreaseCountButton
