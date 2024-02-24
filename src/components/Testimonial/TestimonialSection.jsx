import React from 'react'
import { TestimonialCard } from '../../components'

function TestimonialSection() {
    return (
        <div className='lg:max-w-4xl sm:max-w-2xl max-w-md mx-auto mt-4 p-8'>
            <h2 className='text-4xl lg:text-5xl text-secondary text-center pt-4 mt-4'>
                Testimonials
            </h2>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default TestimonialSection
