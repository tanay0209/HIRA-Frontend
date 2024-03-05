import React from 'react'

function OutlineButton({ text, callback = () => { } }) {
    return (
        <div
            onClick={callback}
            className='w-full p-2 cursor-pointer border-2 border-primary  hover:bg-primary transition-all duration-200 text-center rounded-sm hover:text-white'>
            {text}
        </div>
    )
}

export default OutlineButton
