import React, { Component } from 'react'

//NOT IN FINAL BUILD, was supposed to be functionality to allow providers to edit their details but ran out of time!

class OwnedSet extends Component {
    state = {
        value: "text",
        editMode: false
    }

    changedEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        console.log("edit mode!")
    }

    updateComponentValue = () => {
        this.setState({
            editMode: false,
            value: this.refs.newInput.value
        })
    }

    renderEditView = () => {
        return <div>
        <input type="text" defaultValue={this.state.value} ref="newInput"/>
        <button onClick={this.changedEditMode}>Cancel</button>
        <button onClick={this.updateComponentValue}>Apply</button>
        </div>
    }
    
    renderDefaultView = () => {
        return  <div onDoubleClick={this.changedEditMode}>
            {this.state.value}
        </div>
    }

    render() {
        return this.state.editMode ? 
        this.renderEditView() :
        this.renderDefaultView()

        
    }
}

export default OwnedSet
