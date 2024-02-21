import React from 'react';
import { CollectionItem } from '.';
import background from '../assets/images/category_background.jpg';

const categories = [
    {
        title: 'Jewellery Set',

    },
    {
        title: 'Anklets',
    },
    {
        title: 'Bracelets',
    },
    {
        title: 'Pendants',
    },
    {
        title: 'Ring',
    },
];

function CollectionSection() {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='w-full lg:h-screen'
        >
            <h2 className='text-3xl lg:text-5xl text-secondary text-center pt-4'>
                Shop by Category
            </h2>
            <div className='flex h-2/3 lg:h-3/4 items-center max-w-2xl m-auto justify-center flex-wrap mt-4'>
                {categories.map(category => (
                    <CollectionItem key={category.title} title={category.title} path={category.path} />
                ))}
            </div>
        </div>
    );
}

export default CollectionSection;
