import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul>
        {/* Link is for use other pages, this have the propety of " to " and you add the path of the page*/}
        <NavLink to='/'> <li>Home</li> </NavLink>
        <NavLink to='/products'> <li>Products</li> </NavLink>
        <NavLink to='/about'> <li>About</li> </NavLink>
        <NavLink to='/contact'> <li>Contact</li> </NavLink>
        <NavLink to='/jobs'> <li>Jobs</li> </NavLink>
        {/* Whats the difference between navlink an Link // NavLink gives an active class to the elements*/}
      </ul>
      <button onClick={()=> navigate('/contact', {replace: true})}>Get Started</button>
    </div>
  )
}

export default Navbar