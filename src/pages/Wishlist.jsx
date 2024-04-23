import React, { useEffect } from 'react'
import { CollectionItem, Layout } from '../components'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Wishlist() {
    const navigate = useNavigate()
    let wishlistItems = useSelector(state => state.wishlist.wishlistedItems)
    useEffect(() => {
        const currentUser = localStorage.getItem('user')
        if (!currentUser) {
            navigate('/login')
            return
        }
    }, [])
    return (
        <Layout>
            <h1 className='text-4xl text-center uppercase font-semibold p-4'>Your Wishlist</h1>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3'>
                {/* Card Container */}
                {wishlistItems.length > 0 ? wishlistItems.map(product => <CollectionItem key={product.id} product={product} />) : <h1 className='ml-4'>Add some items to the wishlist</h1>}
            </div>
        </Layout>
    )
}

export default Wishlist
