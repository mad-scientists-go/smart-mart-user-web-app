import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome } from './components'
import OrderHistory from './components/UserOrderHistory'

/**
 * COMPONENT
 */
const Routes = (props) => {
  return (
    <Router history={history}>
      <Main>
          <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/myorders" component={OrderHistory} />
          </Switch>
          </div>
      </Main>
    </Router>
  )
}
export default Routes
