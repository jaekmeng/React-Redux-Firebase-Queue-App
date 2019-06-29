import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import {Link} from 'react-router-dom'

//Queue system implemented here.
class QueuePage extends Component {
    state = {
        queue: 0,
        inQueue: false,
        isOpen: false
    }

    //Reads and saves data from firebase's realtime database.
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

    //Gets queue data from firebase realtime database and edits it.
    joinQueue = () => {
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        var queue = this.state.queue;
        queue++;
        firebase.database().ref().child('object').child(lastURLSegment).update({queue});
        this.setState({inQueue:true});
    }

    quitQueue = () => {
        var pageURL = this.props.location.pathname;
        var lastURLSegment = pageURL.substring(pageURL.lastIndexOf('/') + 1);
        var queue = this.state.queue;
        queue--;
        firebase.database().ref().child('object').child(lastURLSegment).update({queue});
        this.setState({inQueue:false});
    }

    render() {

        const buttonType = this.state.inQueue ? <button className="btn blue lighten-1" onClick={this.quitQueue}>Quit Queue</button> 
        :<button className="btn blue lighten-1" onClick={this.joinQueue}>Join Queue</button>;

        const queueDescript = this.state.inQueue ? <h4>You are number {this.state.queue}</h4> 
        :<h4>The queue currently has {this.state.queue} people</h4>;

        const queueZero = this.state.queue === 0 & this.state.inQueue ? <div><h4>It's your turn, thank you for waiting!</h4>
        <Link to={'/customer'} className="btn blue lighten-1">Return to main page</Link></div> 
        : <div>{queueDescript}{buttonType}</div>

        const closedQueue = this.state.isOpen ? <div>{queueZero}</div> : <h4>Queue is closed!</h4> 
        return (
            <div class="center-align">
                {closedQueue}
            </div>
        )
    }
}

export default QueuePage
