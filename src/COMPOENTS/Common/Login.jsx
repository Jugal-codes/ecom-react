import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const {register, handleSubmit} = useForm()

  const navigate = useNavigate()

  const submitHandler = (data)=>{
      alert("Login...")
      
      
      //we will call api here and api will return response as
      //{token:"skasjiasjsajpiaskas",role:"admin"}
      //store token and role both in localSotrage
      localStorage.setItem("token","aksjnasashashjassihsabashasash") //it will come from api
      localStorage.setItem("role","user") //it will come from api

      navigate("/user")

      // Application - local storage - local:5173 - didn;t get key nd value
      // DOUBT
  }

  return (
    <div className='flex min-h-screen bg-purple-100'>
      <div className="flex-1 flex items-center justify-end">
        {/* Form code yahan aayega */}
        <form onSubmit={handleSubmit(submitHandler)} className="bg-black p-10 shadow-md rounded-l-full w-150 h-140">
          <h1 className="text-4xl font-bold mt-10 mb-6 text-center text-purple-700 ml-20">Hello Again!
          <p className="text-lg text-purple-400">Welcome back you've been missed!</p>
          </h1>

          <div className="mb-4 text-gray-300 ml-10">
          <label className="block mb-2">Username or Email</label>
          <input type='text' {...register("email")}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
          </div>

          <div className="mb-4 text-gray-300 ml-10">
            <label className="block mb-2">Password</label>
            <input type='text'{...register("password")}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"></input>
          </div>

          <div className=" flex justify-between items-center mb-4 text-sm ml-10">
            <label className="flex items-center text-purple-300">
              <input type="checkbox" {...register("rememberMe")} className="mr-2" /> 
              Remember Me 
            </label>
            <a href="#" className="text-purple-300 hover:underline">Forgot password?</a>
          </div>

          <div className='w-50'>
            <button type="submit" className="w-full bg-purple-800 text-white py-2 ml-10 rounded hover:bg-purple-700 transition">
              Log in
            </button>
          </div>
        </form>
      </div>
        

      <div className="flex-1 flex items-center justify-end bg-purple-100">
        <img src="public\images\login.png" 
          alt="Login illustration" 
          className="w-[2000px] h-[585px]"
        />
      </div>
    </div>
  )
}
export default Login
