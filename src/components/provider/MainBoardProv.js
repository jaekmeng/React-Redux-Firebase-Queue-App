import React, {Component} from 'react'
import OwnedList from './OwnedList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

//Main container to hold and display providers that user owns.
class MainBoardProv extends Component {
    render(){
        const {owned, auth} = this.props;

        //Route guard.
        if(!auth.uid){
            return <Redirect to='/' />
        }

        
        return (
            <div className="mainboardprov container">
                <div className="row">
                    <div className="col s12 m6">
                        <OwnedList owned={owned}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        owned: state.firestore.ordered.providers,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'providers'}
    ])
)(MainBoardProv)