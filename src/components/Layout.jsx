import React from 'react'

function Layout({ children }) {
    return (
        <div className='lg:max-w-7xl md:max-w-3xl mx-auto max-w-xl md:px-4 my-8 px-8'>
            {children}
        </div>
    )
}

export default Layout
