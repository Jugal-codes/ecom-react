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
        <img src="public\images\dreamy(1).png" 
          alt="Login illustration" 
          className="w-[2000px] h-[585px]"
        />
      </div>
    </div>
  )
}
export default Login
















































//   return (
//     //<div className="grid grid-cols-2 min-h-screen ">
//     <div className="relative min-h-screen">
//       <img src="/images/bg-img.png" alt="Login illustration" className="w-700 h-147"/>

//       {/* Left side: Form */}
//       <div className="flex items-center justify-center">
//         <form onSubmit={handleSubmit(submitHandler)} className="bg-white p-8 rounded shadow-md w-96">

//           <div className="mb-4">           
//             <label className="block text-gray-700 mb-2">EMAIL</label>
//             <input type='text' {...register("email")} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Username or Email Address</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your email"
//             />
//           </div>

//         </form>
        
      
//       </div>


//       {/* <div className="flex items-center justify-center bg-purple-100">
//         <img
//           src="/images/bg-img.png"
//           alt="Login illustration"
//           className="w-auto h-auto"
//         />
//       </div> */}


//       {/* Left side: Form */}
//       {/* <div className="flex items-center justify-center">
//         <form className="bg-white p-8 rounded shadow-md w-96">
//           <h1 className="text-3xl font-bold mb-6 text-purple-600">dreamer.</h1>
//           <h2 className="text-2xl font-semibold mb-4">Sign in</h2>

//           <button className="w-full bg-red-500 text-white py-2 rounded mb-4 hover:bg-red-600 transition">
//             G Sign in with Google
//           </button>

//           <p className="text-sm text-gray-600 mb-6">
//             No account? <span className="text-purple-600 cursor-pointer">Sign up</span>
//           </p>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Username or Email Address</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <p className="text-sm text-purple-600 mb-4 cursor-pointer">Forgot password?</p>

//           <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
//             Sign in
//           </button>
//         </form>
//       </div> */}

//       {/* Right side: Illustration */}
//       {/* <div className="flex items-center justify-center bg-purple-100">
//         <img
//           src="/images/bg-img.png"
//           alt="Login illustration"
//           className="w-auto h-auto"
//         />
//       </div> */}
//     </div>







    
// //  <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //      {/* <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>  */}
// //      {/* <h1 className="text-2xl font-bold mb-6 text-center">Welcome back</h1> */}
// //      {/* <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-black">Welcome back</h1> */}

// //      <div className="flex flex-col items-center justify-center bg-blue-100 w-1/2 p-6">
// //        <h1 className="text-2xl font-bold mb-4">Welcome back</h1>
// //        <img src='/images/BgImage.png'
// //         // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTok5LSaXZQ2hv-59h2o0BwnuCrRnJ1bV67uhIqzuPOepjXEe2gukVVY&s=10" 
// //          alt="Login illustration" 
// //          className="w-3/4 h-auto"
// //        />
// //      </div>

// //      {/* <div className="flex items-center justify-center bg-blue-100">
// //        {/* <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-black">Welcome back</h1> */}
// //        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTok5LSaXZQ2hv-59h2o0BwnuCrRnJ1bV67uhIqzuPOepjXEe2gukVVY&s=10"  */}
// //        {/* alt="Login illustration" className="w-full h-auto"/> */}
// //      {/* </div> */} 

// //       <form onSubmit={handleSubmit(submitHandler)} className="bg-white p-8 rounded shadow-md w-96">
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2">EMAIL</label>
// //           <input type='text' {...register("email")}
// //           className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2">PASSWORD</label>
// //           <input type='text' {...register("password")}
// //           className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
// //         </div>

// //         <div className="flex justify-between items-center mb-4 text-sm">
// //           <label className="flex items-center">
// //             <input type="checkbox" className="mr-2" /> Remember Me
// //           </label>
// //           <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
// //         </div>


// //         <div className="mb-4">
// //           <input type='submit' className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"></input>
// //         </div>
// //       </form>

// //     </div>
    
//   )
// }


