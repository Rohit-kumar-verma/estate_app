import React, { useContext } from 'react'
import './layout.scss'
import NavBar from '../../components/NavBar/navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


const Layout = () => {
  return (
    <div className='layout'>
    <NavBar/>
      <div className='content'>
        <Outlet/>
    </div>
    </div> 
  )
}

const RequieredLayout = () => {
  const {currentUser} =useContext(AuthContext)

  return (
    !currentUser ? (<Navigate to ='/login'/> ):(
    <div className='layout'>
    <NavBar/>
      <div className='content'>
        <Outlet/>
    </div>
    </div> 
    )
  )
}
export {Layout, RequieredLayout}
