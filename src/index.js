import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import {Provider} from 'react-redux'
import store from './store'
//import App from './App';
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <Provider store={store}>
  <Routes />
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
