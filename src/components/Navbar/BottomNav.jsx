import React, { useState } from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown';

const BottomNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-black top-16 shadow z-50 fixed w-full text-white p-2'>
            <div className='flex items-center justify-center'>
                <div className={`text-3xl lg:hidden p-1 absolute top-2 bg-black w-full z-40 items-center pl-4 flex lg:p-0 ${open ? 'flex justify-end pr-7 bg-primary transition-all duration-500' : ''}`} onClick={() => setOpen(!open)}>
                    <ion-icon
                        name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
                <ul className='lg:flex hidden uppercase items-center gap-4'>
                    <Dropdown />
                    <NavItem title={'About Us'} link={'/about'} />
                    <NavItem title={'Contact Us'} link={'/contact'} />
                    <NavItem title={'Dashboard'} link={'/admin/dashboard'} />
                </ul>
                {/* Mobile Nav */}
                <ul
                    className={`lg:hidden bg-primary fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                >
                    <Dropdown />
                    <NavItem title={'About Us'} link={'/about'} />
                    <NavItem title={'Contact Us'} link={'/contact'} />
                    <NavItem title={'Dashboard'} link={'/admin/dashboard'} />
                </ul>
            </div>
        </div>
    )
}

export default BottomNav
