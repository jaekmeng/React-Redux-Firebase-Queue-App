import React from 'react'
import {NavLink} from 'react-router-dom'
import firebase from 'firebase/app'

//Links if the user is a customer.
const SignInLinksCust = () => {
    return (
        <ul className="right">
            <li><NavLink to='/customer'className='blue lighten-1'>{firebase.auth().currentUser.displayName}</NavLink></li>
        </ul>
    )
}

export default SignInLinksCust