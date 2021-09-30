import React from 'react';
import { useDispatch } from 'react-redux';

import {updateBStatus, updateCStatus} from '../../actions/leads';

const MainLead = ({lead,i}) => {
    const dispatch = useDispatch();
    let colorr = 'white';
    if(lead.conversionStatus === true){
        colorr = 'lightGreen';
    }
    
    const handleConversionStatus = () =>{
        dispatch(updateCStatus(lead._id,lead));
    }

    const handleBroadcastStatus = () =>{
        dispatch(updateBStatus(lead._id,lead));
    }
    return (

        <tr style={{background: colorr}} key={i} >
            <td>{i}</td>
            <td>{lead.leadName}</td>
            <td>{lead.company}</td>
            <td>{lead.domain}</td>
            <td><input
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    checked={lead.conversionStatus}
                    onChange={handleConversionStatus}
                    /></td>
            <td><input
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    checked={lead.broadcastStatus}
                    onChange={handleBroadcastStatus}
                    />
            </td>
      </tr> 


    )
}

export default MainLead;