import React from 'react'
import OwnedSummary from './OwnedSummary'

const OwnedList = ({owned}) => {
    return (
        <div className="owned-list section">
            {owned && owned.map(ownedProv =>{
                
                return (
                    <OwnedSummary ownedProv={ownedProv} key={ownedProv.id}/>)
            })}
  
        </div>
    )
}

export default OwnedList