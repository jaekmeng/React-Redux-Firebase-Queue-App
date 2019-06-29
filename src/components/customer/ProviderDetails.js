import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

const ProviderDetails = (props) => {
    const {provider, auth} = props;

    var pageURL = props.location.pathname;
    var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);

    //Route guard for unlogged users.
    if(!auth.uid){
        return <Redirect to='/' />
    }

    if (provider){
        return(
        <div className="container section provider-details">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{provider.name}</span>
                            <p>{provider.description}</p>
                            <div className="input-field">
                                <Link to={'/queue/'+ lastURLSegment}>
                                    <button className="btn blue lighten-1">Queue Now!</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-action">Opening Hours: {provider.opening} - {provider.closing}</div>
                    </div>
                </div>
        )
    }else{
        return (
            <div className="container center">
                <p>Loading</p>
            </div>
            )
    }

}

//Adds firestore reference to page.
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const providers = state.firestore.data.providers;
    const provider = providers ? providers[id] : null;
    return{
        provider: provider,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'providers'}
    ])
)(ProviderDetails)

