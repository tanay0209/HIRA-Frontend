import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { CiSearch } from "react-icons/ci";


// TODO: MAKE AND HANDLE API CALL
function Login() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const onSubmit = (data) => {
        reset()
        try {

        } catch (error) {
            setError("email", {
                message: "This email is already taken"
            })
        }
    }

    return (
        <Layout>
            <div className='mt-[6rem]'>
                <h2
                    className='text-center text-3xl m-3'
                >
                    Log into your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full'>
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
                                className='absolute right-2 top-0 bottom-0 h-6 w-6 my-auto font-thin'
                            />
                        </div>
                        {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className='w-full bg-primary p-2 text-white rounded-sm hover:bg-black transition ease-in duration-200'
                    >
                        {isSubmitting ? "Submitting" : "Login"}
                    </button>
                </form>
                <p
                    className='text-left mt-2 text-gray-500 hover:underline inline-block'
                >
                    <Link
                        to='/forgot-password'
                    >
                        Forgot Password
                    </Link>

                </p>
                <div
                    className='text-center mt-2'
                >
                    Don't have an account?
                    <Link
                        to='/signup'
                        className='underline ml-2'
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Login
