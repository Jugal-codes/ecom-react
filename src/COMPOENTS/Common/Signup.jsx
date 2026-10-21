import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const {register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const submitHandler = (data) =>{
        alert("Sign up...")


        navigate("/user")
    }

    
  return (
    <div className='flex min-h-screen bg-purple-100'>

        <div>
            <img src="public/images/signup.png" 
            alt="signup-image" 
            className="w-160 h-147"/>
        </div>


        <div className="flex-1 flex items-center">
            <form onSubmit={handleSubmit(submitHandler)} className="bg-black pt-5 p-10 shadow-md rounded-r-full w-150 h-140">
                
                <h1 className="text-4xl font-bold mr-30 mb-6 text-center text-purple-700">Create your Account
                    <p className="text-base text-purple-400">Let's get started! Fill in your details below.</p>
                </h1>

                <div className="mb-2 text-gray-300 mr-10">
                    <label className="block mb-1">First Name</label>
                    <input type="text" {...register("fname")}
                    className="w-100 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
                </div>

                <div className="mb-2 text-gray-300 mr-10">
                    <label className="block mb-1">Last Name</label>
                    <input type="text" {...register("lname")}
                    className="w-100 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
                </div>

                <div className="mb-2 text-gray-300 mr-10">
                    <label className="block mb-1">Email</label>
                    <input type="text" {...register("email")}
                    className="w-100 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
                </div>

                <div className="mb-2 text-gray-300 mr-10">
                    <label className="block mb-1">Password</label>
                    <input type="text" {...register("password")}
                    className="w-100 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
                </div>

                <div className="mb-2 text-gray-300 mr-10">
                    <label className="block mb-1">Confirm Password</label>
                    <input type="text" {...register("cpassword")}
                    className="w-100 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
                </div>

                <div className="mt-4 flex">
                    <button type="submit" 
                    className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition w-50"
                    > Sign Up </button>
                </div>
                


            </form>
        </div>
      
    </div>
  )
}

export default Signup
