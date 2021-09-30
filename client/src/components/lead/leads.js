import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { fetch_leads } from '../../actions/leads';

import MainLead from './mainLead';
import BroadcastedLeads from './broadcastedLeads';

import './styleLeads.css';

const Leads = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_leads())
  },[dispatch]);
  
  const {lead}= useSelector((state)=>state.lead);
  const user = JSON.parse(localStorage.getItem('profile'));
  
  const [leads, setLeads] = useState(lead);
  
  useEffect(()=>{
    setLeads(lead);
  },[lead])
  

  return (
    user? <> 
        <div id="hdiv1" className = "hdiv1">Leads Main List
        {leads.length ?
        <table className="tbl">
          <thead>
            <tr>
              <th>#</th>
              <th>Lead Name</th>
              <th>Company</th>
              <th>Domain</th>
              <th>Conversion Status</th>
              <th>Broadcast Status</th>
            </tr>
          </thead>
          <tbody>
        {leads.filter(ll => (user.name === ll.createdBy)).map((l, i) => (
          
        <MainLead key={i} lead={l} i={i}/>

        ))}</tbody>
      </table>:<div>No Leads</div>}
      </div>
      <div id="hdiv1" className = "hdiv1">Broadcasted Leads
        {leads.length ?
        <table className="tbl">
        <thead>
          <tr>
            <th>#</th>
            <th>Lead Name</th>
            <th>Company</th>
            <th>Domain</th>
            <th>Conversion Status</th>
            <th>Broadcast Status</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
        {leads.filter(ll => ll.broadcastStatus === true).map((l, i) => (
        <BroadcastedLeads key={i} lead={l} i={i}/>
        ))}</tbody>
      </table>:<div>No Leads</div>}
      </div> 
    </>: <></>
    // user ? <Paper>
    //   <Typography variant="h6">Main List</Typography>
    //   {!leads.length ? <CircularProgress /> :
    //     (
    //       <Grid container alignItems="centre" spacing={2}>
    //         {leads.filter(ll => (user.name === ll.createdBy)).map((l, i) => (
    //           <Grid key={i} item xs={12} sm={12} md={4} lg={3}>
    //             <Lead lead={l} i={i} />
    //           </Grid>
    //         ))}
    //       </Grid>
    //     )
    //   }
    //   <Typography variant="h6">Broadcasted List</Typography>
    //   {!leads.length ? <CircularProgress /> :
    //     (
    //       <Grid container alignItems="stretch" spacing={3}>
    //         {leads.filter(ll => ll.broadcastStatus === 'true').map((l, i) => (
    //           <Grid key={i} item xs={12} sm={12} md={4} lg={3}>
    //             <Lead lead={l} i={i} />
    //           </Grid>
    //         ))}
    //       </Grid>
    //     )
    //   }

    // </Paper> : <></>

  
  );
};

export default Leads;