import React, { useState } from "react";
import DropDownMenuItem from "./DropDownMenuItem";

const items = [
    {
        title: "For Her",
        options: ['Rings', 'Bracelets', 'Pendants', 'Anklets', 'Jewellery Sets']
    },
    {
        title: "For Him",
        options: ['Rings', 'Bracelets']
    },
    {
        title: "Shop By Color",
        options: ['Oxidised Silver', 'Rhodium Plated Silver', 'Gold Plated', 'Rose Gold Plated']
    },
    {
        title: "Shop By Style",
        options: ['Everyday Staples', 'Office Minimals', 'Party Pieces', 'Wedding Wear']
    },
    {
        title: "Shop Featured",
        options: ['New', 'Bestsellers', 'Kids Collection', 'Rakhi Fever']
    },

]
export default function Dropdown({ title }) {

    const [isOpen, setIsOpen] = useState(false)
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="relative hidden mt-4 lg:inline-block lg:mt-0 text-primary mr-4 p-2 text-lg font-semibold hover:text-golden group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex justify-center items-center">
                <p>{title}</p>
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1  group-hover:rotate-180 transition-all group-hover:duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>

                    <div className={`absolute left-[-16px] min-w-max mt-4 origin-top-left bg-white border border-gray-100 shadow-lg ${isOpen ? "block" : "hidden"} `}>
                        <div className="grid grid-cols-5 gap-10 p-4 text-black uppercase text-left">
                            {items.map(item => {
                                return <DropDownMenuItem
                                    key={item.title}
                                    title={item.title}
                                    options={item.options}
                                    closeMenu={() => setIsOpen(false)}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}