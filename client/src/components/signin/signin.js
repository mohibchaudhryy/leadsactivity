import React, { useState } from 'react';
import { Paper, Typography, Container, Grid, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../actions/signin';
import "./style.css";

const SignIn = () => {
    const [credentials,setCredentials] = useState({email:'',password:''});
    const dispatch = useDispatch();   
    const history = useHistory(); 

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => { 

            e.preventDefault(); 
            dispatch(signIn(credentials, history));
        }

    return (
        <Container>
            <Paper className="App" style={{marginTop:"12rem"}} elevation={7}>
                
                <form className="form" onSubmit={handleSubmit}>

                    <Grid container spacing={4}>
                        <Typography gutterBottom component="h1" variant="h5"> Sign In </Typography>
                        <TextField name="email" type="email" variant="outlined" label="Email" fullWidth onChange={handleChange} /><br/>
                        
                        <TextField name="password" label="Password" type="password" variant="outlined" fullWidth onChange={handleChange} />
                        <Button className="form__custom-button" type="submit" fullWidth variant="contained" color="primary" >Sign In</Button>
                   
                   </Grid>

                </form>
            
            </Paper>    

        </Container>
        
        
    )
}

export default SignIn;
