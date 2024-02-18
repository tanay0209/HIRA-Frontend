import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CiSearch } from "react-icons/ci";
import NavIcons from './NavIcons';
import { BsCart2, BsHeart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const icons = [
    {
        path: "/",
        component: <FiUser />,
        title: "Account"
    },
    {
        path: "/",
        component: <BsHeart />,
        title: "Wishlist"
    },
    {
        path: "/",
        component: <BsCart2 />,
        title: "Cart"
    },
]

function TopNav() {

    return (
        <>
            <nav className='flex items-center fixed w-screen lg:justify-around flex-wrap p-3 bg-primary shadow z-50 top-0 justify-between'>
                <Link to='/' className='flex-shrink-0'>
                    Sea Jewels
                </Link >
                <div className='w-1/3 lg:flex hidden'>
                    <input type="text"
                        placeholder='Search'
                        className='w-full rounded-md border-none focus:ring-0 focus:ring-offset-0'
                    />
                    <div className='relative'>
                        <CiSearch
                            className='absolute right-2 top-0 bottom-0 h-6 w-6 my-auto font-thin'
                        />
                    </div>
                </div>
                <div className='flex justify-between cursor-pointer'>
                    {icons.map((icon) => {
                        return <NavIcons key={icon.title} path={icon.path} component={icon.component} title={icon.title} />
                    })}

                </div>

            </nav ></>
    )
}

export default TopNav
