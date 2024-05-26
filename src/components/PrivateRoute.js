// components/PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Custom PrivateRoute component to protect routes that require authentication
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true; // Check if user is authenticated (e.g., via token)
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
