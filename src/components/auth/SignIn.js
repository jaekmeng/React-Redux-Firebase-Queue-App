import React, { Component } from 'react'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {Link} from 'react-router-dom'

//Creates the sign in page using firebase authentication with third party.
class SignIn extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => false
        }
      }

      componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
        })
      }


      //Renders different pages depending on user sign up.
    render() {
        return (
                  <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div class="center-align">
            <h4>Welcome {firebase.auth().currentUser.displayName}</h4>
            <h5>Currently in developer mode</h5>
            <Link to={'/provider'} className="btn red lighten-1">View as Provider</Link> 
            <Link to={'/customer'} className="btn blue lighten-1">View as Customer</Link>
            </div>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
        )
    }
}

export default SignIn
