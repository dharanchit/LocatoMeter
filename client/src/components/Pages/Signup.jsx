import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, InputLabel, Select, TextField,MenuItem } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
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

const SignUpPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isTeacher,setIsTeacher] = useState(false);
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        fetch('http://localhost:9000/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username:userName,
                email:email,
                password:password,
                isTeacher: isTeacher
            })
        }).then(response => {
            console.log(response);
            if(response.status == 200){
                response.json().then(i => 
                    {storeUserToken(i["token"]);
                    dispatch({type:"AUTH_TOKEN",payload:true});
                }).then(i => history.push("/homepage"));
            }
        }).catch(err => {
            console.log(err);
        })

    }

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.labelFields}>
            <TextField name="username" label="Username" onChange={(e) =>setUserName(e.target.value)} fullWidth type="text"/>
            </Grid>
            <Grid item xs={12} className={classes.labelFields}>
            <TextField name="email" label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} type="email"/>
            </Grid>
            <Grid item xs={12} className={classes.labelFields}>
            <TextField name="password" label="Password" fullWidth onChange={(e) => setPassword(e.target.value)} type="password" /> 
            </Grid>
            <Grid item xs={12} className={classes.labelSelectFields}>
                <InputLabel >I am a Teacher</InputLabel>
                <Select name="isTeacher" value={isTeacher} style={{paddingTop:'10px'}} defaultValue="False" onChange={(e) => {setIsTeacher(e.target.value)}}>
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} className={classes.fields}>
            <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">Sign Up</Button>
            </Grid>
        </Grid>
    );
}

export default SignUpPage;