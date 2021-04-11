import React, { useEffect } from 'react';
import ButtonAppBar from './components/Navbar';
import Body from "./components/Body";
import {Switch,Route} from 'react-router-dom';
import SignUpPage from './components/Pages/Signup';
import SignInPage from './components/Pages/SignInPage';
import PrivateRoute from './components/Commons/PrivateRoute';
import Homepage from './components/Pages/CommonHompage';

function App() {

  return (
   <>
    <ButtonAppBar />
    <Switch>
      <Route exact path="/" component={Body}/>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signin" component={SignInPage} />
      <PrivateRoute path="/homepage" component={Homepage} />
    </Switch>
   </>
  );
}

export default App;
