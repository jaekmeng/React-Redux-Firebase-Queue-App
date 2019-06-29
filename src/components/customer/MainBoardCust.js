import React, {Component} from 'react'
import ProviderList from './ProviderList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

//Main board to hold and display providers for customers to queue for.
class MainBoardCust extends Component {
    render(){
        const {cust, auth} = this.props;

        //Route guard for unlogged users.
        if(!auth.uid){
            return <Redirect to='/' />
        }

        return (
            <div className="mainboardcust container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProviderList cust={cust}/>
                    </div>
                </div>
            </div>
        )
    }
}

//Adds firebase reference to page.
const mapStateToProps = (state) => {
    return {
        cust: state.firestore.ordered.providers,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'providers'}
    ])
)(MainBoardCust)