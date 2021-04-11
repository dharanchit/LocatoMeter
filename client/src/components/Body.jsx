import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from './Commons/commonlyRequiredData';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        textAlign:'center'
    },
    Link:{
        color:'white',
        textDecoration: 'none'
    },
    SignUpBtn:{
        marginTop:'20%',
    },
    LoginBtn:{
        marginTop:'10px',
    },
    btnClass:{
        width:'20%'
    }
}))

const Body = () => {
    const classes = useStyles();
    const history = useHistory();

    const dispatch = useDispatch();

    const hasToken = useSelector(state => state.auth.token);

    useEffect(() => {
        setTimeout(()=> {
            const token = localStorage.getItem("userToken");
            dispatch({type:"VERIFY_TOKEN",payload:token});
        },0)
    },[])

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.SignUpBtn}>
                <Button variant="contained" onClick={() => history.push("/signup")} className={classes.btnClass} color="primary">Sign Up</Button>
            </Grid>
            <Grid item xs={12} className={classes.LoginBtn}>
                <Button variant="contained" onClick={() => history.push("/signin")} className={classes.btnClass} color="primary">Login</Button>
            </Grid>
        </Grid>
    );
}

export default Body;