import React from 'react'
import {NavLink} from 'react-router-dom'
import firebase from 'firebase/app'

//Links if the user is a provider.
const SignOutLinksProv = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Create</NavLink></li>
            <li><NavLink to='/' onClick={() => firebase.auth().signOut()}>Log Out</NavLink></li>
            <li><NavLink to='/provider'className='red lighten-1'>{firebase.auth().currentUser.displayName}</NavLink></li>
        </ul>
    )
}

export default SignOutLinksProv