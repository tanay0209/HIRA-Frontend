import React from "react";

export default function NavitemDropdown({ title }) {
    return (
        <div
            className="relative hidden  mt-4 lg:inline-block lg:mt-0 text-primary mr-4 p-2 text-lg font-semibold hover:text-golden group cursor-pointer"
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

                    <div className="absolute left-0 min-w-max mt-5 origin-top-left bg-white border border-gray-100 shadow-lg hidden group-hover:block group-hover:transition-all group-hover:duration-300">
                        <div className="grid grid-cols-5 gap-10 p-4 text-black uppercase text-left">
                            {/* TODO: Make the below code as a seperate component */}
                            <div className="grid-col-1">
                                <div className="mb-2 text-base">For Her</div>
                                <div className="flex flex-col gap-2 text-sm font-light">
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Rings</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Bracelets</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Pendants</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Anklets</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Jewellery Sets</div>
                                </div>
                            </div>
                            <div className="grid-col-1">
                                <div className="text-base mb-2">For Him</div>
                                <div className="flex flex-col gap-2 text-sm font-light">
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Rings</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Bracelets</div>
                                </div>
                                <div className="text-base mt-3 mb-2">For Them</div>
                                <div className="flex flex-col gap-2 text-sm font-light cursor-pointer hover:bg-gray-300 p-2">All Products</div>
                            </div>
                            <div className="grid-col-1">
                                <div className="text-base mb-2">Shop By Color</div>
                                <div className="flex flex-col gap-2 text-sm font-light">
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Oxidised Silver</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Rhodium Plated Silver</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Gold Plated</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Rose Gold Plated</div>
                                </div>
                            </div>
                            <div className="grid-col-1">
                                <div className="text-base mb-2">Shop by Style</div>
                                <div className="flex flex-col gap-2 text-sm font-light">
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Everyday Staples</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Office Minimals</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Party Pieces</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Wedding Wear</div>
                                </div>

                            </div>
                            <div className="grid-col-1">
                                <div className="text-base mb-2">Shop Featured</div>
                                <div
                                    className="flex flex-col gap-2 text-sm font-light"
                                >
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">New</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Bestsellers</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Kids Collection</div>
                                    <div className="cursor-pointer hover:bg-gray-300 p-2">Rakhi Fever</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}