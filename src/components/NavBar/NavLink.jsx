import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavLink({to, children, ...props}){
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });

    return (
        <>
            <Link className={`navbar-link text-black sm:text-white flex items-center ${isActive ? 'active' : ''}`} to={to} {...props}>
                {children}
            </Link>
        </>
    )
}

export default NavLink
