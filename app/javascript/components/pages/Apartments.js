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
    const { apartments } = this.state
    return (
      <React.Fragment>
        <h1>Apartments</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Street</th>
              <th>City</th>
              <th>Postal Code</th>
              <th>State</th>
              <th>Country</th>
              <th>Building Manager</th>
              <th>Building Manager Phone Number</th>
              <th>Building Manager Hours</th>
            </tr>

            {apartments.map((apartment, index) =>
              <tr key={index}>
              <td>{apartment.name}</td>
              <td>{apartment.street_address}</td>
              <td>{apartment.city}</td>
              <td>{apartment.postal_code}</td>
              <td>{apartment.state}</td>
              <td>{apartment.country}</td>
              <td>{apartment.building_manager_name}</td>
              <td>{apartment.building_manager_phone_number}</td>
              <td>{apartment.building_manager_hours}</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

}

export default Apartments
