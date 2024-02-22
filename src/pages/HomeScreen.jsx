import React from 'react'
import { ImageCarousel, CollectionSection, ServiceSection, StyleSection } from "../components"


function HomeScreen() {
    return (
        <div className=''>
            <ImageCarousel />
            <CollectionSection />
            <ServiceSection />
            <StyleSection />
        </div>
    );
}



export default HomeScreen
