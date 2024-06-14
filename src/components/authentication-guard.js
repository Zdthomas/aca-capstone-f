
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const AuthenticationGuard = ({ component: Component, ...props }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Component {...props} />;
};

export default AuthenticationGuard;

// export const AuthenticationGuard = ({ component }) => {
//   const Component = withAuthenticationRequired(component, {
//     onRedirecting: () => (
//       <div className="page-layout">
        
//       </div>
//     ),
//   });

//   return <Component />;
// };