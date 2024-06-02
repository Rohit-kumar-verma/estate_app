import React, { useContext, useState } from 'react'
import { navLinks } from '../../constants'
import './navbar.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
    const [open, setOpen]= useState(false);
    
    const {currentUser}= useContext(AuthContext)

  return (
    <nav>
        <div className='left'>
            <a href="#" className="logo">
            <img src='../../../src/assets/real-estate.svg' alt='logo' />
                <span>LamaEstate</span>
            </a>
            {navLinks.map((navLink,index)=>(
                <a href='#' key={navLink.id}>{navLink.title}</a>
            ))}
        </div>
        <div className='right'>
            {currentUser ? (
            <div className='user'>
                <img src={currentUser.avatar || '../../../src/assets/favicon.png'} alt='profile'/>
                <span>currentUser.username</span>
                <Link to='/profile' className='profile'>
                    <div className="notification">3</div>
                    <span>Profile</span>
                    {currentUser?<span>Logout</span>:""}
                    </Link>
            </div>
            ): (
                <>
                    <a href='/login' >Sign in</a>
                    <a href='/register' className='signUp'>Sign up</a>
                </>
            )}
            <div className='menuIcon'>
                <img src={`../../../src/assets/${open ?'download_1':'download'}.png`} alt='menu-icon' onClick={() => setOpen((prev) => !prev)}/>
            </div>
            <div className={`${open ? "menu active" : "menu"}`}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
                <a href='/login'>Sign in</a>
                <a href='/register'>Sign up</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
