import React, { useState } from 'react'
import { Layout } from '../components'
import { useForm } from 'react-hook-form'


function ForgotPassword() {

    const [formSubmitted, setFormSubmitted] = useState(false)
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm()
    const onSubmit = (data) => {
        reset()
        try {
            setFormSubmitted(true)
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
                    Forgot Password
                </h2>
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


                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className='w-full bg-primary p-2 text-white rounded-sm hover:bg-black transition ease-in duration-200'
                    >
                        {isSubmitting ? "Submitting" : "Submit"}
                    </button>
                </form>
                {formSubmitted && <div
                    className='text-md mt-2 text-center text-black'

                >Check your email for reset link</div>}
            </div>
        </Layout>
    )
}

export default ForgotPassword
