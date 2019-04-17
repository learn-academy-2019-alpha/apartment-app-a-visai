import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'



class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
        <Link to='/newapartment'>Add An Apartment</Link>
          <Switch>
            <Route path='/newapartment' component={NewApartment}/>
            <Route path='/apartments' component={Apartments}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp
