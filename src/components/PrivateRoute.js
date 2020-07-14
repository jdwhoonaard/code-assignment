import React from 'react'
import PropTypes from 'prop-types'
import {
  Redirect,
  Route,
} from 'react-router-dom'
import qs from 'qs'

const PrivateRoute = ({
  component: Component,
  ...props
}) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    render={(p) => {
      const queryString = qs.parse(props.location.search)
      return (queryString.token && queryString.token === "private-key" ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...p} />
      ) : (
        <Redirect
          to={{
            pathname: '/sign-in',
            state: { from: p.location },
          }}
        />
      ))
    }}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.func]).isRequired,
}

export default PrivateRoute
