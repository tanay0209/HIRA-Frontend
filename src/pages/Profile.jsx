import React, { useEffect, useState } from 'react'
import { Button, Layout, OutlineButton } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'
function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signout = () => {
        dispatch(logout())
        navigate('/')
    }

    const getUser = () => {
        const currentUser = localStorage.getItem('user')
        if (!currentUser) {
            navigate('/login')
            return
        }
        setUser(JSON.parse(currentUser))
        setLoading(false)
    }

    useEffect(() => {
        getUser()

    }, [])
    return (
        <Layout>
            <h2 className='text-4xl uppercase font-semibold py-4 text-center md:text-left'>
                Your Profile
            </h2>
            {loading ? <h1>Loading</h1> : <div className="grid grid-cols-2 text-xl gap-8 mt-8">
                <div className="text-right pr-4 font-bold">Email Address</div>
                <div className="pl-4">{user.email}</div>
                <div className="text-right pr-4 font-bold">First Name</div>
                <div className="pl-4">{user.firstName}</div>
                <div className="text-right pr-4 font-bold">Last Name</div>
                <div className="pl-4">{user.lastName}</div>
                <div className='flex justify-center items-center md:flex-row flex-col col-span-2 gap-4'>
                    {/* <OutlineButton text={'My Orders'} /> */}
                    <Button callback={signout} text={'Log out'} />
                </div>
            </div>}

        </Layout>
    )
}

export default Profile
