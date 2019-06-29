import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createOwned} from '../../store/actions/ownedActions'
import {Redirect} from 'react-router-dom'

//Used to create a new provider.
class CreateOwn extends Component {
    state = {
        name: '',
        description: '',
        ownedDescription: '',
        opening: '',
        closing: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createOwned(this.state);
        this.props.history.push('./provider');
    }
    render() {

        const {auth} = this.props;

        //Route guard.
        if(!auth.uid){
            return <Redirect to='/' />
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text">Create a new provider!</h5>
                    <div className="input-field">
                        <label htmlFor="name">Service Provider Name</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="ownedDescription">Owner Description</label>
                        <textarea id="ownedDescription" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="opening">Opening</label>
                        <input type="time" id="opening" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="closing">Closing</label>
                        <input type="time" id="closing" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

//Fires off to redux actions and reducers.
const mapDispatchToProps = (dispatch) => {
    return {
        createOwned: (owned) => dispatch(createOwned(owned))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOwn)
