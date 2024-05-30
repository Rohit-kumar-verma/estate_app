import React from 'react'
import './layout.scss'
import NavBar from '../../components/NavBar/navbar'
import { Outlet } from 'react-router-dom'

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

export default Layout
