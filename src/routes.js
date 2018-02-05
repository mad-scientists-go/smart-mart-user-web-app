import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome } from './components'
import OrderHistory from './components/UserOrderHistory'
import CamSignup from './components/CampSignUp';
import Success from './components/PostSignup';
/**
 * COMPONENT
 */
const Routes = (props) => {
  return (
    <Router history={history}>
      <Main>
          <div>
          <Switch>
            <Route path="/success" component={Success} />
            <Route path="/" component={CamSignup} />
            <Route path="/login" component={Login} />
            <Route path="/myorders" component={OrderHistory} />
            
          </Switch>
          </div>
      </Main>
    </Router>
  )
}
export default Routes
