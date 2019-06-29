import React from 'react'
import {Link} from 'react-router-dom'

//Gives more detail to users if required.
const ProviderSummary = ({customer}) => {
    return(
            <div className="card provider-summary">
                <div className="card-content black-text">
                    <span className="card-title">{customer.name}</span>
                    <p>{customer.description}</p>
                    <p>Opening Hours: {customer.opening} - {customer.closing}</p>
                    <div className="input-field">
                        <Link to={'/queue/'+ customer.id}  className="btn blue lighten-1">Queue Now!
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export default ProviderSummary