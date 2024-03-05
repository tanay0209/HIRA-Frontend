import React, { useState } from "react";
import { Link } from "react-router-dom";


const links = [
    {
        name: "Shop",
        submenu: true,
        sublinks: [
            {
                Head: "For Her",
                sublink: [
                    { name: "Rings" },
                    { name: "Bracelets" },
                    { name: "Pendants" },
                    { name: "Anklets" },
                    { name: "Jewellery Sets" },
                ],
            },
            {
                Head: "For Him",
                sublink: [
                    { name: "Rings" },
                    { name: "Bracelets" },
                ],
            },
            {
                Head: "Shop by Color",
                sublink: [
                    { name: "Oxidised Silver" },
                    { name: "Rhodium Plated Silver" },
                    { name: "Gold Plated" },
                    { name: "Rose Gold Plated" },
                ],
            },
            {
                Head: "Shop by Style",
                sublink: [
                    { name: "Everyday Staples" },
                    { name: "Office Minimals" },
                    { name: "Party Pieces" },
                    { name: "Wedding Wear" },
                ],
            },
            {
                Head: "Shop Featured",
                sublink: [
                    { name: "New" },
                    { name: "Bestsellers" },
                    { name: "Kids Collection" },
                    { name: "Rakhi Fever" },
                ],
            },
        ]
    }
]

const Dropdown = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div className="px-3 text-left lg:cursor-pointer group mt-4 lg:mt-0 ">
                        <h2
                            className="flex justify-between items-center lg:pr-0 pr-5 group font-semibold text-lg text-white hover:text-golden"
                            onClick={() => {
                                setHeading(heading === link.name ? "" : link.name);
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl lg:hidden inline">
                                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}
                                ></ion-icon>
                            </span>
                            <span className="text-xl lg:mt-1 lg:ml-2  lg:block hidden ">
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h2>
                        {link.submenu && link.sublinks && (
                            <div>
                                <div className="absolute top-18 hidden group-hover:lg:block hover:lg:block">
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-4 gap-8">
                                        {link.sublinks.map((mysublinks, subIndex) => (
                                            <div key={subIndex}>
                                                <h3 className="text-lg font-semibold text-black">
                                                    {mysublinks.Head}
                                                </h3>
                                                {mysublinks.sublink.map((slink, subLinkIndex) => (
                                                    <li key={subLinkIndex} className="text-sm text-gray-600 my-2.5">
                                                        <Link
                                                            to={`/collections/${slink.name}`}
                                                            className="hover:text-golden"
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`${heading === link.name ? "lg:hidden" : "hidden"}`}
                    >
                        {/* sublinks */}
                        {link.sublinks.map((slinks, subIndex) => (
                            <div key={subIndex}>
                                <div>
                                    <h3
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="py-4 pl-7 font-semibold flex justify-between items-center lg:pr-0 pr-5">
                                        {slinks.Head}
                                        <span className="text-xl lg:mt-1 lg:ml-2 inline">
                                            <ion-icon
                                                name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}
                                            ></ion-icon>
                                        </span>
                                    </h3>
                                    <div
                                        className={`${subHeading === slinks.Head ? "lg:hidden" : "hidden"}`}
                                    >
                                        {slinks.sublink.map((slink, subLinkIndex) => (
                                            <li key={subLinkIndex} className="py-3 pl-14">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Dropdown;
