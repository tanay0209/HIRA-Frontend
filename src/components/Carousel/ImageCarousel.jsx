import React from 'react'
import { Carousel } from "@material-tailwind/react";
function ImageCarousel() {
    return (
        <Carousel transition={{ duration: 1.5 }} autoplayDelay={2000} autoplay={true} loop={true} className='z-10 h-96'>
            <img
                src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1588444650733-d0767b753fc8?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    )
}

export default ImageCarousel

