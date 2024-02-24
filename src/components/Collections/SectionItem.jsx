import React from 'react'
import background from "../../assets/images/category_background.jpg"
import { Link } from 'react-router-dom'
import Utils from '../../utils'


function SectionItem({ title }) {

    const path = title.includes(" ") ? Utils.removeSpaces(title) : Utils.convertFirstLettertoLowercase(title)

    return (
        <>
            <div className='flex flex-col items-center'>
                <Link
                    to={`collections/${path}`}
                >
                    <img
                        className='rounded-full size-36 lg:size-44 mx-4 shadow-md'
                        src={background} alt="Background" />
                    <div className='font-bold mt-2 text-center'>{title}</div>
                </Link>
            </div>
        </>
    )
}

export default SectionItem
