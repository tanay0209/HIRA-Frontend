import React from 'react'
import { CollectionItem, Layout } from '../components';
import productOne from "../assets/bracelet/productOne.JPG"
import productTwo from "../assets/bracelet/productTwo.JPG"
import productThree from "../assets/bracelet/productThree.JPG"
import productFour from "../assets/bracelet/productFour.JPG"
import productFive from "../assets/bracelet/productFive.JPG"
import productSix from "../assets/bracelet/productSix.JPG"

const products = [
    {
        id: 1,
        title: "Jaipuri Men Bracelet",
        price: 2499,
        image: productOne,
        quantity: 1
    },
    {
        id: 2,
        title: "Jodhpuri Unisex Bracelet",
        price: 2999,
        image: productTwo,
        quantity: 1
    }, {
        id: 3,
        title: "Stary Bracelet Gold",
        price: 2749,
        image: productThree,
        quantity: 1
    }, {
        id: 4,
        title: "Evil Eye Bracelet Rhodium",
        price: 3999,
        image: productFour,
        quantity: 1
    }, {
        id: 5,
        title: "Petal Bracelet Rhodium",
        price: 2499,
        image: productFive,
        quantity: 1
    }, {
        id: 6,
        title: "Valentine Bracelet Rhodium",
        price: 1999,
        image: productSix,
        quantity: 1
    },
]

function Bracelet() {
    return (
        <div>
            <Layout>
                <h2 className='text-4xl text-center uppercase font-semibold p-4'>Bracelet</h2>
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

export default Bracelet
