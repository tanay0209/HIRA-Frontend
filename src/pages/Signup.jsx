import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components';
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { signup } from '../store/authSlice';



function Signup() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset, watch } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        reset()
        // try {
        //     dispatch(signup(data))
        //     navigate('/')
        // }
        // catch (error) {
        //     setError("email", {
        //         message: "This email is already taken"
        //     })
        dispatch(signup(data))
        navigate('/login')
    }



    return (
        <Layout>
            <div className='mt-[6rem]'>
                <h1
                    className='text-center text-3xl m-3'
                >
                    Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full'>

                    <input {...register("firstName", {
                        required: "First name is required",
                    })}
                        type="text"
                        placeholder='First Name'
                        className='border rounded-md focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.firstName && <div className='text-red-500'>{errors.firstName.message}</div>}


                    <input {...register("lastName", {
                        required: "Last name is required",

                    })}
                        type="text"
                        placeholder='Last name'
                        className='border rounded-md focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.lastName && <div className='text-red-500'>{errors.lastName.message}</div>}

                    <input {...register("email", {
                        required: "Email is required",
                        validate: {
                            matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be valid."
                        }
                    })}
                        type="text"
                        placeholder='Email'
                        className='border rounded-md  focus:ring-0 focus:ring-offset-0'
                    />
                    {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
                    <div className='lg:flex hidden'>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be atleast 8 characters"
                            }
                        })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            className='border rounded-md focus:ring-0 focus:ring-offset-0 w-full'
                        />
                        <div className='relative'>
                            <CiSearch
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-2 top-0 bottom-0 h-6 w-6 my-auto font-thin cursor-pointer'
                            />
                        </div>
                        {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
                    </div>
                    <div className='lg:flex hidden'>
                        <input {...register("confirm_password", {
                            required: true,
                            validate: (val) => {
                                if (watch('password') != val) {
                                    return 'Password does not match'
                                }
                            }
                        })}
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder='Confirm Password'
                            className='border rounded-md focus:ring-0 focus:ring-offset-0 w-full'
                        />
                        <div className='relative'>
                            <CiSearch
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className='absolute right-2 top-0 bottom-0 h-6 w-6 my-auto font-thin cursor-pointer'
                            />
                        </div>
                        {errors.confirm_password && <div className='text-red-500'>{errors.confirm_password.message}</div>}
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className='w-full bg-primary p-2 text-white rounded-sm hover:bg-black transition ease-in duration-200'
                    >
                        {isSubmitting ? "Submitting" : "Register"}
                    </button>
                </form>
                <div
                    className='text-center mt-4'
                >
                    Already have an account?
                    <Link
                        to='/login'
                        className='underline ml-2'
                    >
                        Login
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Signup
