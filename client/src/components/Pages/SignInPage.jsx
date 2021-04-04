import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignSelf:'center'
    },
    Link:{
        color:'white',
        textDecoration: 'none'
    }
}))

const SignInPage = () => {
    const classes = useStyles();
    const history = useHistory();

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item>
                    Login Page 
                </Grid>    
            </Grid>
        </div>
    );
}

export default SignInPage;