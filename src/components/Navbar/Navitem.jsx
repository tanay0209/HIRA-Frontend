import React from 'react'
import { NavLink } from 'react-router-dom'
import NavitemDropdown from './NavitemDropdown';

function NavItem({ title, link }) {
    const scrollToTarget = (target) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        title === 'Categories' ?
            <a
                className=" relative block mt-4 lg:inline-block lg:mt-0 text-white mr-4 p-2 text-lg font-semibold hover:text-golden group"
                href="#"
                onClick={() => scrollToTarget(title)}>
                {title}
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-golden rounded-lg transform scale-x-0 transition-transform origin-left hover:scale-x-1 group-hover:scale-x-100 hidden lg:block"></span>
            </a>
            : title === 'test' ? <NavitemDropdown /> : <NavLink
                to={link}
                style={({ isActive }) => ({
                    color: isActive ? '#F8E3CE' : ''
                })}

                className=" relative block mt-4 lg:inline-block lg:mt-0 text-white mr-4 p-2 text-lg font-semibold hover:text-golden group">
                {title}
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-golden rounded-lg transform scale-x-0 transition-transform origin-left hover:scale-x-1 group-hover:scale-x-100 hidden lg:block"></span>
            </NavLink>
    )
}

export default NavItem