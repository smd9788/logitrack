import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCustomer } from "../../actions/customers";

export class Form extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    us_state: "",
    zip_code: ""
  };

  static propTypes = {
    addCustomer: PropTypes.func.isRequired
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const { name, street, city, us_state, zip_code } = this.state;
    const customer = { name, street, city, us_state, zip_code };
    this.props.addCustomer(customer);
    this.setState({
      name: "",
      street: "",
      city: "",
      us_state: "",
      zip_code: ""
    });
  };

  render() {
    const { name, street, city, us_state, zip_code } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Customer</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Street Address</label>
            <input
              className="form-control"
              type="text"
              name="street"
              onChange={this.onChange}
              value={street}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              className="form-control"
              type="city"
              name="city"
              onChange={this.onChange}
              value={city}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <textarea
              className="form-control"
              type="text"
              name="us_state"
              onChange={this.onChange}
              value={us_state}
            />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <textarea
              className="form-control"
              type="text"
              name="zip_code"
              onChange={this.onChange}
              value={zip_code}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCustomer })(Form);
