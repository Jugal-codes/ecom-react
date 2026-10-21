import React from 'react'
import { FaHeart, FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


// install - react-icons for these icon..

const UserNavbar = () => {
  return (
    <nav className="bg-purple-700 p-4 text-white flex justify-between items-center">

      <div className="flex items-center gap-6">
        <Link to="/user" className="text-purple-200 font-bold flex items-center gap-2"> <FaHome/> Home </Link>
      
        <div className="bg-purple-200 flex items-center bg-purple-200 rounded overflow-hidden">
          <FaSearch className="text-purple-700 mx-2"/>
          <input type="text" placeholder="Search..." className="text-purple-200 font-bold text-purple-700 flex-1 px-2 py-1 outline-none w-100" />
          <button className="bg-purple-700 border rounded text-purple-200 font-bold m-1 px-4 py-1">Search</button>
        </div>
      </div>
      
      
      <div className="flex items-center gap-6">
        <Link to="/wishlist" className="text-purple-200 font-bold flex items-center gap-2">
          <FaHeart />Wishlist </Link>

        <Link to="/cart" className="text-purple-200 font-bold flex items-center gap-2">
          <FaShoppingCart /> Cart </Link>
        
        <Link to="/account" className="text-purple-200 font-bold flex items-center gap-2">
          <FaUser /> Account </Link>
      
      </div>

      {/* <div>
        <Link to="/wishlist" className="flex items-center gap-2"> <FaHeart/> Wishlist</Link>
      </div>

      <div>
        <Link to="/cart" className="flex items-center gap-2"> <FaShoppingCart/>Cart</Link>
      </div>

      <div>
        <Link to="/account" className="flex items-center gap-2"> <FaUser/>Account</Link>
      </div>
     */}
      <Outlet/>
    </nav>
  )
}

export default UserNavbar
