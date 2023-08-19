import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'

function Layout() {
    const location = useLocation()
    return (
        <div>
            <div className="header_fixed" style={{  opacity: location.pathname.includes("/movie/")?"0.8":"1" }}>
                <Header />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout
