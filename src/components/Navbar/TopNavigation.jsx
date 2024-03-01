import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CiSearch } from "react-icons/ci";
import NavIconItem from './NavIconItem';
import { BsCart2, BsHeart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import logo from "../../assets/images/logo.png"

const icons = [
    {
        path: "/",
        component: <FiUser />,
        title: "Account"
    },
    {
        path: "/wishlist",
        component: <BsHeart />,
        title: "Wishlist"
    },
    {
        path: "/cart",
        component: <BsCart2 />,
        title: "Cart"
    },
]

function TopNavigation() {

    return (
        <>
            <nav className='flex items-center fixed w-screen lg:justify-around flex-wrap p-3 bg-primary shadow z-50 top-0 justify-between'>
                <Link to='/' className='flex-shrink-0'>
                    <img src={logo} alt="Sea Jewels"
                        className='md:h-18 w-32 h-12'
                    />
                </Link >
                <div className='w-1/3 lg:flex hidden'>
                    <input type="text"
                        placeholder='Search...'
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
                        return <NavIconItem key={icon.title} path={icon.path} component={icon.component} title={icon.title} />
                    })}

                </div>

            </nav ></>
    )
}

export default TopNavigation
