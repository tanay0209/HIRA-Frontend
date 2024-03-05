import React from 'react'
import { CollectionItem, Layout } from '../components'
import background from '../assets/images/category_background.jpg';


const items = [
    {
        id: 1,
        title: "Rose Gold Bracelet",
        price: "1000",
        image: background
    },
    {
        id: 2,

        title: "Item",
        price: "1000",
        image: background
    }, {
        id: 3,

        title: "Item",
        price: "1000",
        image: background
    }, {
        id: 4,

        title: "Item",
        price: "1000",
        image: background
    }, {
        id: 5,

        title: "Item",
        price: "1000",
        image: background
    }, {
        id: 6,
        title: "Item",
        price: "1000",
        image: background
    },
]



function Wishlist() {
    return (
        <Layout>
            <h1 className='text-4xl text-center uppercase font-semibold p-4'>Your Wishlist</h1>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3'>
                {/* Card Container */}
                {items.map(item => {
                    return <CollectionItem item={item} key={item.id} isWishlistItem={true} />
                })}
            </div>
        </Layout>
    )
}

export default Wishlist
