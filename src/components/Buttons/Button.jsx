function Button({ text, callback = () => { } }) {
    return (
        <div
            onClick={callback}
            className='w-full p-2 cursor-pointer bg-primary text-white hover:bg-secondary transition-all duration-200 text-center rounded-sm'>
            {text}
        </div>
    )
}

export default Button
