import bracelet from "./assets/categories/bracelet.JPG"
import broch from "./assets/categories/broch.JPG"
import ladiesring from "./assets/categories/ladiesring.JPG"
import ring from "./assets/categories/ring.JPG"

import productOne from "./assets/bestseller/productOne.JPG"
import productTwo from "./assets/bestseller/productTwo.JPG"
import productThree from "./assets/bestseller/productThree.JPG"
import productFour from "./assets/bestseller/productFour.JPG"
import productFive from "./assets/bestseller/productFive.JPG"


export const styles = [
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

export const categories = [
    {
        title: 'Bracelet',
        image: bracelet
    },
    {
        title: 'Broch',
        image: broch

    },
    {
        title: 'Ladies',
        image: ladiesring

    },
    {
        title: 'Ring',
        image: ring

    },
];

export const bestSeller = [{
    id: 1001,
    image: productOne,
    title: 'Solitaire Couple',
    price: 1999,
    quantity: 1
}, {
    id: 1002,
    image: productTwo,
    title: 'Minimalist Couple',
    price: 2999,
    quantity: 1
}, {
    id: 1003,
    image: productThree,
    title: "Butterfly Ring",
    price: 1499,
    quantity: 1
}, {
    id: 1004,
    image: productFour,
    title: 'Mother Flower',
    price: 1999,
    quantity: 1
}, {
    id: 1005,
    image: productFive,
    title: 'Sailor Sword',
    price: 5999,
    quantity: 1
},
]