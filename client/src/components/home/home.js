import React from 'react';
import {Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Leads from '../lead/leads';
import Form from '../lead/form';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'))
 
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/signin');
  }

  return (
      user ? <div>
        <div className="header" style={{ display: "flex" }}>
          <div className="title">Lead Sharing App</div>
          <div className="useName">{user.name.charAt(0).toUpperCase()+user.name.slice(1)}</div>
          <Button className="btnLog" variant="contained" color="secondary" style={{marginTop:'2rem' }} onClick={logout} > Logout </Button>
        </div>
        <center>
        <Form lg={4}/>
        </center>           
        <Leads lg={8}/>
      </div> : <></>
  )
}

export default Home;