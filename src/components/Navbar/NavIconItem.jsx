import React from 'react'
import { NavLink } from 'react-router-dom'

function NavIconItem({ path, component, title }) {
    return (
        <NavLink
            to={path}
            className='mx-2 flex-col flex items-center uppercase gap-1 text-black text-sm'
        >
            {component}
            {title}
        </NavLink>
    )
}

export default NavIconItem
