import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'

//Sets up queue functions for providers to manipulate.

class OwnedQueue extends Component {
    state = {
        queue: 0,
        isOpen: false
    }

    //Reads and saves down data from the firebase realtime database.
    componentDidMount(){
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        const fbDBRef = firebase.database().ref().child('object').child(lastURLSegment).child('queue');
        fbDBRef.on('value', snap => {
            this.setState({
                queue: snap.val()
            });
        });
        const fbDBRefOpen = firebase.database().ref().child('object').child(lastURLSegment).child('isOpen');
        fbDBRefOpen.on('value', snap => {
            this.setState({
                isOpen: snap.val()
            });
        });
    }

    //Lets the provider open the queue and edits the realtime database.
    openQueue = () => {
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        var isOpen = true
        this.setState({isOpen:true});
        firebase.database().ref().child('object').child(lastURLSegment).update({isOpen});
    }

    //Lets the provider close the queue and edits the realtime database.
    closeQueue = () => {
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        var isOpen = false
        this.setState({isOpen:false});
        var queue = 0;
        firebase.database().ref().child('object').child(lastURLSegment).update({isOpen});
        firebase.database().ref().child('object').child(lastURLSegment).update({queue});
    }

    //Adds customers to the queue manually.
    addQueue = () => {
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        if(this.state.isOpen === true){
            var queue = this.state.queue;
            queue++;
            firebase.database().ref().child('object').child(lastURLSegment).update({queue});
        }

    }

    //Subtracts customers to the queue manually.
    subQueue = () => {
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        if(this.state.isOpen === true){
            if(this.state.queue > 0){
                var queue = this.state.queue;
                queue--;
                firebase.database().ref().child('object').child(lastURLSegment).update({queue});
            }
        }
    }

    render() {
        const queueDescript = this.state.isOpen ? <h4>Currently {this.state.queue} people in queue</h4> 
        :<h4>Queue is closed</h4>;

        const buttonType = this.state.isOpen ? 
        <div> <button className="btn red lighten-1" onClick={this.closeQueue}>Close Queue</button>
        <button className="btn red lighten-1" onClick={this.addQueue}>Increase Queue</button>
        <button className="btn red lighten-1" onClick={this.subQueue}>Decrease Queue</button> </div>
        :
        <button className="btn red lighten-1" onClick={this.openQueue}>Open Queue</button>;
        return (
            <div class="center-align">
                {queueDescript}
                {buttonType}
            </div>
        )
    }
}

export default OwnedQueue
