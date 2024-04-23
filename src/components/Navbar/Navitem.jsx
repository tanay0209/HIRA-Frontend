import React from 'react'
import { NavLink } from 'react-router-dom'


function NavItem({ title, link }) {
    return (
        <NavLink
            to={link}
            className="relative block lg:inline-block lg:mt-0 text-white mr-4 p-2 text-lg font-semibold hover:text-golden">
            {title}
        </NavLink>
    )
}

export default NavItem