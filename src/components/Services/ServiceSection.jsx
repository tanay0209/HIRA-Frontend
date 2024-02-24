import React from 'react'
import { ServiceItem } from '..'
import authetic from '../../assets/services/authentic.png'
import shipping from "../../assets/services/delivery.png"
import guarantee from "../../assets/services/guarantee.png"


const services = [
    {
        title: '925 Silver Guarnteed',
        description: 'Discover our stunning collection of jewelry, each piece crafted with guaranteed 925 silver authenticity.',
        image: authetic
    },
    {
        title: 'Free Shipping Across India',
        description: 'Enjoy complimentary shipping on all orders within India, hassle-free!',
        image: shipping
    },
    {
        title: '3 Months Warranty',
        description: 'All purchases include a three-month warranty for added assurance.',
        image: guarantee
    },
]

function ServiceSection() {
    return (
        <div className='w-full flex mt-3 lg:bg-gray-300 gap-2 flex-col lg:flex-row'>
            {services.map((service, index) => (
                <ServiceItem title={service.title} description={service.description} image={service.image} key={index} />
            ))}
        </div>
    )
}

export default ServiceSection
