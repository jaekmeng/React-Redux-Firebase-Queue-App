import React from 'react'
import firebase from 'firebase/app'
import {Link} from 'react-router-dom'
//import {deleteOwned} from '../../store/actions/ownedActions'
//import {connect} from 'react-redux'

//Allows the provider to see more details of their establishment if required.
const OwnedSummary = ({ownedProv}) => {

    //NOT IN FINAL BUILD, supposed to allow the provider to delete a service but ran out of time.
    //const handleSubmit = (e) =>{
      //  e.preventDefault();
      //  this.props.deleteOwned(ownedProv);
      //  this.props.history.push('./provider');
   // }

    if(ownedProv.owned!==firebase.auth().currentUser.uid){
        return (<div></div>)
    }


    return(
            <div className="card owned-summary">
                <div className="card-content black-text">
                    <span className="card-title">{ownedProv.name}</span>
                    <p>{ownedProv.ownedDescription}</p>
                    <p>Opening Hours: {ownedProv.opening} - {ownedProv.closing}</p>
                    <div className="input-field">
                        <Link to={'/ownedQueue/'+ ownedProv.id} className="btn red lighten-1">Queue Settings</Link>
                    </div>
                    
                </div>
            </div>
    )
}

//const mapDispatchToProps = (dispatch) => {
 //   return {
   //     deleteOwned: (owned) => dispatch(deleteOwned(owned))
    //}
//}

export default OwnedSummary