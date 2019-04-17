import React from "react"
import PropTypes from "prop-types"

class NewApartment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name:"",
        street_address:"",
        city:"",
        postal_code:"",
        state:"",
        country:"",
        building_manager_name:"",
        building_manager_phone_number:"",
        building_manager_hours:""
      }
    }
  }

  handleChange = () => {
    
  }

  render(){
    return (
      <form>
        <label>Name:
          <input type="text" size="25" name="name"/>
        </label>
        <br/>
        <label>Street Address:
          <input type="text" size="25" name="street_address"/>
        </label>
        <br/>
        <label>City:
          <input type="text" size="25" name="city"/>
        </label>
        <br/>
        <label>Postal Code:
          <input type="text" size="25" name="postal_code"/>
        </label>
        <br/>
        <label>State:
          <input type="text" size="25" name="state"/>
        </label>
        <br/>
        <label>Country:
          <input type="text" size="25" name="country"/>
        </label>
        <br/>
        <label>Building Manager Name:
          <input type="text" size="25" name="building_manager_name"/>
        </label>
        <br/>
        <label>Building Manager Phone Number:
          <input type="text" size="25" name="building_manager_phone_number"/>
        </label>
        <br/>
        <label>Building Manager Hours:
          <input type="text" size="25" name="building_manager_hours"/>
        </label>
        <br/>
        <input type="submit" name="submit"/>
      </form>
    )
  }
}

export default NewApartment
