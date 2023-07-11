import React from 'react'
import NavLink from './NavLink'
import { HiFire } from 'react-icons/hi'
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar flex flex-wrap items-center gap-[32px]'>
            <NavLink to="/popular">Popular<HiFire className='ml-2'/></NavLink>
            <NavLink to="/ongoing">Ongoing</NavLink>
            <NavLink to="/newrelease">New Release</NavLink>
            <NavLink to="/upcoming">Up Coming</NavLink>
        </div>
    )
}

export default NavBar
