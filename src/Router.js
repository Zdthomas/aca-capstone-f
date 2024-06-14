import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react';
import cookie from 'cookie';
import Login from './components/Login'
import RandomNumberGenerator from './components/RandomNumberGenerator';
import CharacterSheet from './components/CharacterGen';
import Home from './components/Home';
import Registration from './components/Registration';
import CallbackPage from './components/Call-Backpage';
import AuthenticationGuard from './components/authentication-guard';
import  Profile  from "./components/Profile"
import { LoginButton } from './components/LoginButton';
import { SignupButton } from './components/Signup-button';



const checkAuth = () => {

    const cookies = cookie.parse(document.cookie);

    return cookies["loggedIn"] ? true : false;

  };


  const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    return checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> );
  };

const Router = () => {
  const { isAuthenticated } = useAuth0();
    return (
        <Routes>
            
            
            <Route path="/login" element={<LoginButton />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/callback" element={<CallbackPage />} />
            {/* <Route path="/profile" element={<AuthenticationGuard component={Profile} />} /> */}
            <Route path="/characters" element={<AuthenticationGuard component={CharacterSheet} />} />
            <Route path="/Home" element={<AuthenticationGuard component={Home} />} />
            <Route path="/" element={<Home />} />
            
           
        </Routes>
    );
};

export default Router;