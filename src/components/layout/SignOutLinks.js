import React from 'react'
import {NavLink} from 'react-router-dom'

//Links shown when user is not logged in.
const SignOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks