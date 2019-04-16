import React from "react"
import PropTypes from "prop-types"


class Apartments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
      fetch('/apartments.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({apartments: json})
      })
      .catch((e)=>{
        console.log("Error", e)
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Apartments</h1>
      </React.Fragment>
    );
  }

}

export default Apartments
