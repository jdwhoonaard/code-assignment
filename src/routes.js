import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Sessions from './screens/Sessions'
import SignInScreen from './screens/SignInScreen';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/sessions" component={Sessions} />
        <Route path="/sign-in" component={SignInScreen} />
        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  )
}
