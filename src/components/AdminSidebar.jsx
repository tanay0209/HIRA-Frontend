import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidemenuOptions = [
    {
        text: "Dashboard",
        link: "dashboard"
    },
    {
        text: "Create Product",
        link: "create-product"
    },
    {
        text: "Create Category",
        link: "create-category"
    },
]

const Sidebar = () => {

    const location = useLocation()
    return (
        <div className="md:bg-primary md:h-full mb-4 md:mb-0 text-center">
            <h2 className='text-xl font-bold p-4'>Welcome Tanay</h2>
            <ul className='flex md:flex-col flex-wrap gap-4'>
                {sidemenuOptions.map(option => (
                    <Link
                        key={option.text}
                        className={`p-4 text-black text-lg md:w-full text-center  hover:text-secondary ${location.pathname.includes(option.link) ? 'text-gray-500 underline md:no-underline' : ""}`}
                        to={`/admin/${option.link}`}
                    >
                        {option.text}
                    </Link>

                ))}

            </ul>
        </div>
    );
}

export default Sidebar;
