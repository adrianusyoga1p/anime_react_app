import React from 'react'
import './Header.css'
import NavBar from './NavBar/NavBar'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Header() {
    const handleClick = (e) =>{
        e.preventDefault()
        console.log('oke')
    }

    return (
        <div className='w-full p-8' style={{background: 'var(--colorPrimary)'}}>
            <div className="container mx-auto">
                <div className="flex items-center flex-col gap-[24px]">
                    <Link to='/' className="text-center title-header font-bold m-0 text-[36px]">ANIME LIST</Link>
                    <div className="input-wrapper">
                        <button className="icon-search" onClick={handleClick}>
                            <HiSearch/>
                        </button>
                        <input type="text" />
                    </div>
                    <NavBar/>
                </div>
            </div>
        </div>
    )
}

export default Header
