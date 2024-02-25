import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import background from '../../assets/images/category_background.jpg';
import BestSellerItem from './BestSellerItem';
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
const items = [{
    id: 1,
    image: background,
    title: 'Product',
    price: "50"
}, {
    id: 3,
    image: background,
    title: 'Product',
    price: "50"
}, {
    id: 2,
    image: background,
    title: 'Product',
    price: "50"
}, {
    id: 4,
    image: background,
    title: 'Product',
    price: "50"
}, {
    id: 5,
    image: background,
    title: 'Product',
    price: "50"
},
]


function BestSellerCarousel() {
    return (
        <Carousel
            responsive={responsive}
            className='max-w-4xl mx-auto mt-6'
            swipeable={true}
            showDots={true}
            infinite={true}
            autoPlay={responsive.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={2000}
        >
            {items.map((item) => {
                return <BestSellerItem key={item.id} id={item.id} price={item.price} title={item.title} image={item.image} />
            })}
        </Carousel>


    )
}

export default BestSellerCarousel
