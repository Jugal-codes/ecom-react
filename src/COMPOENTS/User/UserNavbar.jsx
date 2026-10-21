import React from 'react'
import { Outlet } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <div>
      <h1>UserNavbar</h1>
      <Outlet/>
    </div>
  )
}

export default UserNavbar
