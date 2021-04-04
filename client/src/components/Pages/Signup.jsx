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

const SignUpPage = () => {
    const classes = useStyles();
    const history = useHistory();

    return(
        <div className={classes.root}>
            <Grid container direction="column">
                <Grid item>
                        Sign Up Page
                    </Grid>
                    <Grid item>
                        ADs
                </Grid>
            </Grid>
        </div>
    );
}

export default SignUpPage;