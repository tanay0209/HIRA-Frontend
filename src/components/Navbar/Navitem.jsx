import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from '.'

function NavItem({ title, link }) {
    return (
        title === 'Shop' ? <Dropdown
            title={title} link={link} /> : <NavLink
                to={link}
                style={({ isActive }) => ({
                    color: isActive ? '#1594AD' : ''
                })}
                className="relative block mt-4 lg:inline-block lg:mt-0 text-primary mr-4 p-2 text-lg font-semibold hover:text-golden group">
            {title}
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-golden rounded-lg transform scale-x-0 transition-transform origin-left hover:scale-x-1 group-hover:scale-x-100 hidden lg:block"></span>
        </NavLink>
    )
}

export default NavItem