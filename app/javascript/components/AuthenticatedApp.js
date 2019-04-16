import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Apartments from './pages/apartments'


class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path='/apartments' component={Apartments}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp
