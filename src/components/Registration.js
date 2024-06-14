import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Registration = () => {

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const handleLogin = async () => {

    await loginWithRedirect();

  };

  return (

    <div>

      {!isAuthenticated && (

        <button onClick={handleLogin}>Register / Login</button>

      )}

      {isAuthenticated && (

        <div>

          <h2>Welcome, {user.name}</h2>

          <p>Your unique ID: {user.sub}</p>

          <p>Your email: {user.email}</p>

        </div>

      )}

    </div>

  );
  
};

export default Registration;