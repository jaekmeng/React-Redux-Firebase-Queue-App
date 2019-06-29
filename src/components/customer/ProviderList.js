import React from 'react'
import ProviderSummary from './ProviderSummary'
import {Link} from 'react-router-dom'

//Generates adaptive list of providers based on firestore.
const ProviderList = ({cust}) => {
    return(
        <div className="provider-list section">
            {cust && cust.map(customer =>{
                return(
                    <Link to={'/customerList/'+ customer.id} key={customer.id}>
                        <ProviderSummary customer={customer}/>
                    </Link>

                )
            })}
            
        </div>
    )
}

export default ProviderList