import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
      <h1>AdminNavbar</h1>
      <Outlet/>
    </div>
  )
}

export default AdminNavbar
