import React from 'react'
import background from "../assets/images/category_background.jpg"
import { Link } from 'react-router-dom'
import Utils from '../utils'


function CollectionItem({ title }) {

    const path = title.includes(" ") ? Utils.removeSpaces(title) : Utils.convertFirstLettertoLowercase(title)

    return (
        <>
            <div className='flex flex-col items-center'>
                <Link
                    to={`categories/${path}`}
                >
                    <img
                        className='rounded-full h-28 w-28 lg:h-40 lg:w-40 mx-4 border-2 border-primary'
                        src={background} alt="" />
                    <div className='font-bold mt-2 text-center'>{title}</div>
                </Link>
            </div>
        </>
    )
}

export default CollectionItem
