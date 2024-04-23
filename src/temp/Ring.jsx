import React from 'react'
import { CollectionItem, Layout } from '../components';
import productOne from "../assets/rings/productOne.JPG"
import productTwo from "../assets/rings/productTwo.JPG"
import productThree from "../assets/rings/productThree.JPG"
import productFour from "../assets/rings/productFour.JPG"
import productFive from "../assets/rings/productFive.JPG"
import productSix from "../assets/rings/productSix.JPG"
import productSeven from "../assets/rings/productSeven.JPG"
import productEight from "../assets/rings/productEight.JPG"

const products = [
    {
        id: 11,
        title: "Solitarity Couple Ring",
        price: 2999,
        image: productOne,
        quantity: 1
    },
    {
        id: 12,
        title: "Ice Unisex Ring",
        price: 2499,
        image: productTwo,
        quantity: 1
    }, {
        id: 13,
        title: "Old School Ring",
        price: 5999,
        image: productThree,
        quantity: 1
    }, {
        id: 14,
        title: "Radiohead Rose Gold Ring",
        price: 1599,
        image: productFour,
        quantity: 1
    }, {
        id: 15,
        title: "Eagle Ring",
        price: 2999,
        image: productFive,
        quantity: 1
    }, {
        id: 16,
        title: "Eagle Oxidised Ring",
        price: 2499,
        image: productSix,
        quantity: 1
    },
    {
        id: 17,
        title: "Serpent King Ring",
        price: 4999,
        image: productSeven,
        quantity: 1
    },
    {
        id: 18,
        title: "Checkered Couple Ring",
        price: 4999,
        image: productEight,
        quantity: 1
    },
]
function Ring() {
    return (
        <div>
            <Layout>
                <h2 className='text-4xl text-center uppercase font-semibold p-4'>Rings</h2>
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

export default Ring
