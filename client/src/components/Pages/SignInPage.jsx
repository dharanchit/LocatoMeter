import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, InputLabel, Select, TextField,MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {storeUserToken} from '../Commons/commonlyRequiredData';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        textAlign:'center',
        padding:'10% 0',
    },
    labelFields:{
        padding:'0 30% 20px 30%'
    },
    labelSelectFields:{
        padding:'0 40% 20px 40%'
    }
}))

const SignInPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        fetch('http://localhost:9000/login',{
            method:'POST',
            headers:{'Content-Type':'application/json','Accept': 'application/json',},
            body:JSON.stringify({
                email:email,
                password:password,
            })
        }).then(response => {
            if(response.status == 200){
                response.json().then(i => 
                    {storeUserToken(i["token"]);
                    dispatch({type:"AUTH_TOKEN",payload:true});
                }
                    ).then(i => history.push("/homepage"));
            }
        }).catch(err => {
            console.log(err);
        })

    }

    return(
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.labelFields}>
                   <TextField label="Email" fullWidth onChange={(e) =>setEmail(e.target.value)} type="email" />
                </Grid>
                <Grid item xs={12} className={classes.labelFields}>
                   <TextField label="Password" fullWidth onChange={(e) =>setPassword(e.target.value)} type="password" /> 
                </Grid>
                <Grid item xs={12} className={classes.fields}>
                   <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">Sign In</Button>
                </Grid>
            </Grid>
    );
}

export default SignInPage;