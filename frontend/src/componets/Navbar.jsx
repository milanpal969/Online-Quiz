import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div >
        <h2 style={{display:"flex", gap:"20px"}}><NavLink 
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black'
              })}
            >
              Home
            </NavLink>
            <NavLink 
              to="/add-blog"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black'
              })}
            >
              Add Blog
            </NavLink>
        </h2>

    </div>
  )
}

export default Navbar