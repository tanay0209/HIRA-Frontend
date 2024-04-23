import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bestSeller } from '../../data';
import CarouselItem from './CarouselItem';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 750 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 750, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



function ProductCarousel({ className = '', duration, useReplace = false }) {
    return (
        <Carousel
            responsive={responsive}
            className={`w-full ${className}`}
            swipeable={true}
            showDots={true}
            infinite={true}
            autoPlay={responsive.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={duration ? duration : 4000}
            keyBoardControl={true}
            transitionDuration={2000}
        >
            {bestSeller.map((product) => {
                return <CarouselItem key={product.id} product={product} useReplace={useReplace} />
            })}
        </Carousel>


    )
}

export default ProductCarousel
