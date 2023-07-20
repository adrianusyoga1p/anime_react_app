import React from 'react'
import NavLink from './NavLink'
import { HiFire, HiMenu } from 'react-icons/hi'
import './NavBar.css'

function NavBar() {
    return (
        <>
            <div className='navbar sm:flex flex-wrap items-center gap-[32px] justify-center hidden'>
                <NavLink to="/popular">Popular<HiFire className='ml-2'/></NavLink>
                <NavLink to="/ongoing">Ongoing</NavLink>
                <NavLink to="/newrelease">New Release</NavLink>
                <NavLink to="/upcoming">Up Coming</NavLink>
            </div>

            <div className='navbar fixed sm:hidden flex items-center justify-center'>
                <HiMenu className='text-white text-[20px]'/>
                <div className='bg-white w-[200px] h-auto absolute navbar-items'>
                    <NavLink to="/popular">Popular<HiFire className='ml-2'/></NavLink>
                    <NavLink to="/ongoing">Ongoing</NavLink>
                    <NavLink to="/newrelease">New Release</NavLink>
                    <NavLink to="/upcoming">Up Coming</NavLink>
                </div>
            </div>
        </>
    )
}

export default NavBar
