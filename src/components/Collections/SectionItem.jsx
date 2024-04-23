import { Link } from 'react-router-dom'

function SectionItem({ title, image }) {
    return (
        <>
            <div className='flex flex-col items-center'>
                <Link
                    to={`collections/${title}`}
                >
                    <img
                        className='rounded-full size-36 lg:size-44 mx-4 shadow-md'
                        src={image} alt="Background" />
                    <div className='font-bold mt-2 text-center'>{title}</div>
                </Link>
            </div>
        </>
    )
}

export default SectionItem
