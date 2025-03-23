import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/form-data-capture">
                Form Data Capture
            </NavLink>
        </nav>
    )
}