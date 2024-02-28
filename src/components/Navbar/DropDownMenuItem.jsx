import React from 'react'
import { Link } from 'react-router-dom'

function DropDownMenuItem({ title, options, closeMenu }) {
    const handleOptionClick = () => {
        closeMenu();
    };
    return (
        <div className="grid-col-1">
            <div className="mb-2 text-base">{title}</div>
            <div className="flex flex-col gap-2 text-sm font-light">
                {options.map((option) => {
                    return (
                        <Link
                            key={option}
                            to={`/collections/${option}`}
                            onClick={handleOptionClick}
                        >
                            <div
                                className="cursor-pointer hover:bg-gray-300 p-2">{option}</div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default DropDownMenuItem


