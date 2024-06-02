import React, { useContext } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './homepage.scss'
import { AuthContext } from '../../context/AuthContext'

const HomePage = () => {

  const {className} =useContext(AuthContext)

  return (
    <div className="homePage">
      <div className='textContainer'>
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='../../../src/assets/bg.png' alt=""/>
      </div>
    </div>
  )
}

export default HomePage
