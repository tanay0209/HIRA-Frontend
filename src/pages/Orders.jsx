import React from 'react';
import background from '../assets/images/category_background.jpg';
import { Layout, OrderItem } from '../components';


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

function Orders() {
    return (
        <Layout>
            <div className='flex flex-col'>
                <h2 className='text-4xl uppercase font-semibold py-4 text-center md:text-left'>
                    Your Orders
                </h2>
                {items.map(item => {
                    return <OrderItem />
                })}
            </div>
        </Layout>
    );
}

export default Orders;
