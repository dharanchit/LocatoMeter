import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route,Redirect } from 'react-router-dom'

const PrivateRoute = ({component:Component, ...rest}) => {

    const userInfo = useSelector(state => state.auth.token);
    
    return (
        <Route
            {...rest}
            render={(props) => userInfo == true ?
            <Component {...props} /> : 
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        } />
    );
}

export default PrivateRoute;