import React from "react"
import PropTypes from "prop-types"
import Apartments from './pages/Apartments'


class UnauthenticatedApp extends React.Component {

  render () {
    return (
      <React.Fragment>
        <Apartments/>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
