import React from 'react'
import { ImageCarousel, CollectionSection, ServiceSection, StyleSection, BestSellerSection } from "../components"


function HomeScreen() {
    return (
        <div className=''>
            <ImageCarousel />
            <CollectionSection />
            <ServiceSection />
            <StyleSection />
            <BestSellerSection />
        </div>
    );
}



export default HomeScreen
