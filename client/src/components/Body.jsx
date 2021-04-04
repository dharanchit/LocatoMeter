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

const Body = () => {
    const classes = useStyles();
    const history = useHistory();

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary"><Link className={classes.Link} to="/signup">Sign Up</Link></Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary"><Link className={classes.Link} to="/signin">Login</Link></Button>
                </Grid>
        </Grid>
        </div>
    );
}

export default Body;