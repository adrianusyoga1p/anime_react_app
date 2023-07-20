import React, { useEffect, useRef, useState } from 'react'
import NavLink from './NavLink'
import { HiFire, HiMenu } from 'react-icons/hi'
import './NavBar.css'

function NavBar() {

    const [active, setActive] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setActive(false)
            }
        };
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])
    return (
        <>
            <div className='navbar sm:flex flex-wrap items-center gap-[32px] justify-center hidden'>
                <NavLink to="/popular">Popular<HiFire className='ml-2'/></NavLink>
                <NavLink to="/ongoing">Ongoing</NavLink>
                <NavLink to="/newrelease">New Release</NavLink>
                <NavLink to="/upcoming">Up Coming</NavLink>
            </div>

            <button onClick={()=>setActive(!active)} className='navbar fixed sm:hidden flex items-center justify-center' ref={menuRef}>
                <HiMenu className='text-white text-[20px]'/>
                <div className={`bg-white w-[200px] h-auto absolute navbar-items ${active ? 'active' : ''}`}>
                    <NavLink to="/popular">Popular<HiFire className='ml-2'/></NavLink>
                    <NavLink to="/ongoing">Ongoing</NavLink>
                    <NavLink to="/newrelease">New Release</NavLink>
                    <NavLink to="/upcoming">Up Coming</NavLink>
                </div>
            </button>
        </>
    )
}

export default NavBar
