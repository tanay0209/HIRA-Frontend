import React from 'react'
import { Button, Layout, OutlineButton } from '../components'
function Profile() {
    return (
        <Layout>
            <h2 className='text-4xl uppercase font-semibold py-4 text-center md:text-left'>
                Your Profile
            </h2>
            <div className="grid grid-cols-2 text-xl gap-8 mt-8">
                <div className="text-right pr-4 font-bold">Email Address</div>
                <div className="pl-4">email</div>
                <div className="text-right pr-4 font-bold">First Name</div>
                <div className="pl-4">firstName</div>
                <div className="text-right pr-4 font-bold">Last Name</div>
                <div className="pl-4">lastName</div>
                <div className='flex justify-center items-center md:flex-row flex-col col-span-2 gap-4'>
                    <OutlineButton text={'My Orders'} />
                    <Button text={'Log out'} />
                </div>
            </div>

        </Layout>
    )
}

export default Profile
