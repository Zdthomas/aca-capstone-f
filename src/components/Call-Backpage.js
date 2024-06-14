
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const CallbackPage = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigate('/');
      } else if (error) {
        console.error('Authentication error:', error);
        navigate('/login');
      }
    }
  }, [isAuthenticated, isLoading, error, navigate]);

  return (
    <div>
      Redirecting...
    </div>
  );
};

export default CallbackPage;

