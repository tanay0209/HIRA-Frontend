import React from 'react'
import { ImageCarousel, CollectionSection, ServiceSection, StyleSection, BestSellerSection, TestimonialSection } from "../components"


function HomeScreen() {
    return (
        <div>
            <ImageCarousel />
            <CollectionSection />
            <ServiceSection />
            {/* <StyleSection /> */}
            <BestSellerSection />
            <TestimonialSection />
        </div>
    );
}



export default HomeScreen
