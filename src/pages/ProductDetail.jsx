import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductCarousel, Button, ProductSpeciality, WishlistButton } from '../components'
import { GiBigDiamondRing } from "react-icons/gi";

function ProductDetail() {
    const { state } = useLocation()
    const { id, title, image, price } = state.productDetails
    return (
        <div className='max-w-2xl md:max-w-6xl mx-auto p-8'>
            <div className='grid md:grid-cols-2 gap-4'>
                {/* Left Container holding Image */}
                <div className=' relative'>
                    {/* For Primary Image */}
                    <div className='grid place-items-center'>
                        <img
                            className='w-full p-8 bg-gray-300'
                            src={image} alt="" />
                    </div>
                    {/* For other images */}
                    <div className=' grid place-items-center grid-flow-col gap-2 mt-4'>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                {/* Right Container holding details */}
                <div className='ml-4 flex flex-col gap-4 justify-between lg:gap-0'>
                    <div className='flex  flex-col gap-4 lg:gap-8'>
                        <div className='flex justify-between relative'>
                            <div className='text-xl'>{title}</div>
                            <WishlistButton />
                        </div>
                        <div className='flex'>
                            <div className='text-lg font-bold text-gray-600'>
                                {`Rs. ${price}`}
                            </div>
                            <span className='ml-2'>(Incl. of all taxes)</span>
                        </div>
                        <div className='text-gray-400 font-bold'>
                            Made with 925 Silver
                        </div>
                        <div className='grid grid-cols-2 gap-4 grid-rows-2 w-full'>
                            <ProductSpeciality icon={<GiBigDiamondRing
                                size={24}
                                className='mr-4'
                            />} title={'Lifetime Plating'} />

                            <ProductSpeciality icon={<GiBigDiamondRing
                                size={24}
                                className='mr-4'
                            />} title={'Lifetime Plating'} />

                            <ProductSpeciality icon={<GiBigDiamondRing
                                size={24}
                                className='mr-4'
                            />} title={'Lifetime Plating'} />

                            <ProductSpeciality icon={<GiBigDiamondRing
                                size={24}
                                className='mr-4'
                            />} title={'Lifetime Plating'} />
                        </div>
                    </div>

                    <div className='flex gap-x-2'>
                        <Button text={'Try Now'} />
                        <Button text={'Add to Cart'} />
                    </div>
                </div>
            </div>
            {/* Similar Products */}
            <div className='mt-8'>
                <h2 className='text-center text-3xl font-bold text-secondary'>Similar Products</h2>
                <div>
                    <ProductCarousel />
                </div>
            </div>
            {/* Frequently Bought Together */}
            <div className='mt-8'>
                <h2 className='text-center text-3xl font-bold text-secondary'>Frequently bought Together</h2>
                <div>
                    <ProductCarousel />
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
