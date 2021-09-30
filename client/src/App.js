import React from "react";
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
 
import Home from './components/home/home';
import SignIn from './components/signin/signin'

function App() {
  const user= JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container  maxWidth="xl">
          
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/leads" />} />
            <Route path="/leads" exact component = {Home} />
            <Route path="/signin" exact component={() => (!user ? <SignIn /> : <Redirect to="/leads" />)} />
          </Switch>

      </Container>
    </BrowserRouter>
  );
}

export default App;
