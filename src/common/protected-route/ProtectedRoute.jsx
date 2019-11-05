import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RouteConfig } from '../../config/routeConfig';

const ProtectedRouteComponent = ({ component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={RouteConfig.login} />
      )
    }
  />
);

ProtectedRouteComponent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isLoggedIn,
});

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent);
