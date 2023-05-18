import React from 'react'
import header from './header.css'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='nav-list'>
    <Link to='/'>Home</Link>
     <h2>About</h2>
     <h2>Contact</h2>
     <h2>More</h2>
    </div>
  )
}

export default Header
