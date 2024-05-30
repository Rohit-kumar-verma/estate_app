import React, { useState } from 'react'
import { navLinks } from '../../constants'
import './navbar.scss'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen]= useState(false);
    const [user, serUser]= useState(false);

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
            {user ? (
            <div className='user'>
                <img src='../../../src/assets/favicon.png' alt='profile'/>
                <span>John Doe</span>
                <Link to='/profile' className='profile'>
                    <div className="notification">3</div>
                    <span>Profile</span>
                    </Link>
            </div>
            ): (
                <>
                    <a href='/' >Sign in</a>
                    <a href='/' className='signUp'>Sign up</a>
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
                <a href='/'>Sign in</a>
                <a href='/'>Sign up</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
