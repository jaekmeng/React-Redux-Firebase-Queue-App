import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinksCust from './SignInLinksCust'
import SignOutLinks from './SignOutLinks'
import SignInLinksProv from './SignInLinksProv'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ?  <div><SignInLinksCust /> <SignInLinksProv /></div> : <SignOutLinks />;
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to= '/' className="brand-logo">QSKIP</Link>
                {links}
            </div>
        </nav>
    )
}

//Logging firebase auth to display layout conditionally.
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)