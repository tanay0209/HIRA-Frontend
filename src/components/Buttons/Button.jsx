function Button({ text }) {
    return (
        <div className='w-full p-2 cursor-pointer bg-primary text-white hover:bg-secondary transition-all duration-200 text-center rounded-sm'>
            {text}
        </div>
    )
}

export default Button
