import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie';
import Login from './components/Login'
import RandomNumberGenerator from './components/RandomNumberGenerator';

const checkAuth = () => {

    const cookies = cookie.parse(document.cookie);

    return cookies["loggedIn"] ? true : false;

  };


const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    );
  };

const Router = () => {
    return (
        <Routes>
            
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<ProtectedRoute component={ RandomNumberGenerator }/>} />
            
           
        </Routes>
    );
};

export default Router;