import React from 'react'
import Layout from './Layout'
import Sidebar from './AdminSidebar'

function AdminLayout({ children }) {
    return (
        <Layout>
            <div className='w-full grid md:grid-cols-10'>
                <div className='w-full grid md:col-span-2'>
                    <Sidebar />
                </div>
                <div className='w-full grid md:col-span-8'>{children}</div>
            </div>
        </Layout>
    )
}

export default AdminLayout
