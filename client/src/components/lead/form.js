import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import {createLead} from '../../actions/leads.js'
import { useDispatch } from 'react-redux';

import './form.css';

const Form = () => {
    const [lead, setLead] = useState({ leadName: "", company: "", domain: "", conversionStatus: false, broadcastStatus: false, createdBy: ""});
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(lead.conversionStatus,lead.broadcastStatus);
        dispatch(createLead({...lead, createdBy : user.name}));
        
        clear();
    }

    const clear = () => {
        setLead({ leadName: "", company: "", domain: "", conversionStatus: false, broadcastStatus: false, createdBy: ""});
    }

    return (<> 
        <div className='div1'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lname">Lead Name: </label>
                <input value={lead.leadName} type="text" id="lname" name="fname" onChange={(e) => setLead({ ...lead, leadName: e.target.value })}/>
                <label htmlFor="company">Company: </label>
                <input value={lead.company} type="text" id="company" name="lname" onChange={(e) => setLead({ ...lead, company: e.target.value })}/>
                <label htmlFor="domain">Domain: </label>
                <input value={lead.domain} type="text" id="domain" name="lname" onChange={(e) => setLead({ ...lead, domain: e.target.value })}/>
                <label htmlFor="cstatus">Conversion Status</label>
                <input
                    id="cstatus"
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    checked={lead.conversionStatus}
                    onChange={(e)=>setLead({ ...lead, conversionStatus:e.target.checked })}
                />
                <label htmlFor="bstatus">Broadcast Status</label>
                <input
                    id="bstatus"
                    type="checkbox"
                    className="toggleSwitchCheckbox"
                    checked={lead.broadcastStatus}
                    onChange={(e)=>setLead({ ...lead, broadcastStatus: e.target.checked })}
                /><br/>
                <Button className="btn" variant="contained" color="primary" size="large" type="submit" >Submit</Button>
            </form>
        </div>

    </>
    )
}

export default Form;
