// import React from 'react'
import './CardAnime.css'
import { HiStar } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function CardAnime({cardTitle, imgSrc, rates, desc, href}) { 
    return (
        <>
            <Link to={href}>
                <div className="card-anime">
                    <div className="poster-anime">
                        <img className="max-w-full h-full w-full object-cover" src={imgSrc} />
                    </div>
                    <div className="card-body">
                        <h2 className='text-center font-bold text-white text-[20px]'>{cardTitle}</h2>
                        <div className="line"></div>
                        <h3 className='text-white flex items-center'><HiStar/><span>{rates}</span></h3>
                        <p className="text-white">{desc}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardAnime
