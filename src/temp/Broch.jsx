import React from 'react'
import { CollectionItem, Layout } from '../components';
import productOne from "../assets/broch/productOne.JPG"
import productTwo from "../assets/broch/productTwo.JPG"
import productThree from "../assets/broch/productThree.JPG"
import productFour from "../assets/broch/productFour.JPG"


const products = [
    {
        id: 7,
        title: "Petal Broch",
        price: 1499,
        image: productOne,
        quantity: 1
    },
    {
        id: 8,
        title: "Tulipia Broch",
        price: 2999,
        image: productTwo,
        quantity: 1
    }, {
        id: 9,
        title: "Emeral Petal Broch Broch",
        price: 3499,
        image: productThree,
        quantity: 1
    }, {
        id: 10,
        title: "Mother of Pearl Broch",
        price: 1999,
        image: productFour,
        quantity: 1
    }
]

function Broch() {
    return (
        <div>
            <Layout>
                <h2 className='text-4xl text-center uppercase font-semibold p-4'>Broch</h2>
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

export default Broch
