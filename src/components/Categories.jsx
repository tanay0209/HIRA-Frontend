import React, { } from 'react'
import { CategoryCard } from "../components"


function Categories() {
    return (
        <div id='Categories' className='z-2'>
            <h2 className='text-center text-3xl font-semibold mt-4'>Categories</h2>
            <div className='flex gap-4'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>

        </div>
    )
}

export default Categories
