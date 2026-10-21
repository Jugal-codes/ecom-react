import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HeroPage from "../PAGES/heroPage"
import Login from "../COMPOENTS/Common/login"
import UserNavbar from "../COMPOENTS/User/UserNavbar"
import AdminNavbar from "../COMPOENTS/Admin/AdminNavbar"
import UserDashboard from "../COMPOENTS/User/UserDashboard"
import AdminDashboard from "../COMPOENTS/Admin/AdminDashboard"
import AddProduct from "../COMPOENTS/Admin/AddProduct"
import UserCart from "../COMPOENTS/User/UserCart"
import ProtectedRoutes from "./ProtectedRoutes"

const router = createBrowserRouter([
    {
        path:"/",
        element:<HeroPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/user",
        element:
        <ProtectedRoutes role="user">
            <UserNavbar/>
        </ProtectedRoutes>,
        children:[
            {
                // don't give/ here
                path:"dashboard",
                element:<UserDashboard/>
            },
            {
                path:'usercart',
                element:<UserCart/>
            }
        ]
    },
    {
        path:"/admin",
        element:
        <ProtectedRoutes role="admin">
            <AdminNavbar/>
        </ProtectedRoutes>,
        children:[
            {
                path:'dashboard',
                element:<AdminDashboard/>
            },
            {
                path:'add-product',
                element:<AddProduct/>
            }
        ]
    }
])

const AppRouter = () =>{
    return <RouterProvider router={router}></RouterProvider>

}
export default AppRouter