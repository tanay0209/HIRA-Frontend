import React from 'react'
import { CollectionItem, Layout } from '../components';
import productOne from "../assets/ladies/productOne.JPG"
import productTwo from "../assets/ladies/productTwo.JPG"
import productThree from "../assets/ladies/productThree.JPG"
import productFour from "../assets/ladies/productFour.JPG"
import productFive from "../assets/ladies/productFive.JPG"
import productSix from "../assets/ladies/productSix.JPG"
import productSeven from "../assets/ladies/productSeven.JPG"
import productEight from "../assets/ladies/productEight.JPG"

const products = [
    {
        id: 17,
        title: "Rose Ring",
        price: 2499,
        image: productOne,
        quantity: 1
    },
    {
        id: 18,
        title: "Tribal Rose Gold Ring",
        price: 1999,
        image: productTwo,
        quantity: 1
    }, {
        id: 19,
        title: "Abstract Petal Ring",
        price: 1499,
        image: productThree,
        quantity: 1
    }, {
        id: 20,
        title: "Petal Rose Gold Ring",
        price: 1999,
        image: productFour,
        quantity: 1
    }, {
        id: 21,
        title: "Starry Gold Bracelet",
        price: 2499,
        image: productFive,
        quantity: 1
    }
    ,
    {
        id: 22,
        title: "Rose Gold Sailor Bracelet",
        price: 1299,
        image: productSix,
        quantity: 1
    },

    {
        id: 23,
        title: "Geometrical Bracelet",
        price: 999,
        image: productSeven,
        quantity: 1
    },

    {
        id: 24,
        title: "Skeletol Ring",
        price: 1499,
        image: productEight,
        quantity: 1
    },
]
function LadiesRings() {
    return (
        <div>
            <Layout>
                <h2 className='text-4xl text-center uppercase font-semibold p-4'>Ladies</h2>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3'>
                    {/* Card Container */}
                    {products.map(product => {
                        return <CollectionItem product={product} key={product.id} />
                    })}
                </div>
            </Layout>

        </div>
    )
}

export default LadiesRings
