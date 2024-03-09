import React, { useState } from 'react'
import { Layout } from '../components'
import { useForm } from 'react-hook-form'
import { CiSearch } from "react-icons/ci";

function ResetPassword() {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset, watch } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const onSubmit = (data) => {
        reset()
        try {
            navigate('/login')
        } catch (error) {
            setError("email", {
                message: "This email is already taken"
            })
        }
    }
    return (
        <Layout>
            <div className='mt-[10rem]'>
                <h2
                    className='text-center text-3xl m-3'
                >
                    Reset Password
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full'>
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
                                className='absolute right-2 top-0 bottom-0 h-6 w-6 my-auto font-thin'
                            />
                        </div>
                        {errors.confirm_password && <div className='text-red-500'>{errors.confirm_password.message}</div>}
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className='w-full bg-primary p-2 text-white rounded-sm hover:bg-black transition ease-in duration-200'
                    >
                        {isSubmitting ? "Submitting" : "Confirm"}
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default ResetPassword
