import React from 'react';
import { SectionItem } from '..';
import background from '../../assets/images/category_background.jpg';
import { categories } from "../../data"


function CollectionSection() {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
            className='w-full h-screen'
        >
            <h2 className='text-4xl lg:text-5xl text-secondary text-center pt-4 mt-4'>
                Shop by Category
            </h2>
            <div className='flex h-2/3 lg:h-3/4 items-center max-w-2xl m-auto justify-center flex-wrap mt-4 gap-3'>
                {categories.map(category => (
                    <SectionItem key={category.title} title={category.title} image={category.image} />
                ))}
            </div>
        </div>
    );
}

export default CollectionSection;
