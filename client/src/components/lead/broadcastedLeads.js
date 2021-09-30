import React from 'react';

const BroadcastedLeads = ({lead,i}) => {
    
    return (

        <tr style={{background:'white'}}>
            <td>{i}</td>
            <td>{lead.leadName}</td>
            <td>{lead.company}</td>
            <td>{lead.domain}</td>
            <td>{lead.broadcastStatus.toString()}</td>
            <td>{lead.broadcastStatus.toString()}</td>
            <td>{lead.createdBy}</td>
      </tr> 


    )
}

export default BroadcastedLeads;