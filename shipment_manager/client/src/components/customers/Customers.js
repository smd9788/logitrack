import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCustomers, deleteCustomer } from "../../actions/customers";

export class Customers extends Component {
  static PropTypes = {
    customers: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getCustomers();
  }

  render() {
    return (
      <Fragment>
        <h2>Customers</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>{customer.zip_code}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.props.deleteCustomer.bind(this, customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customerReducer.customers
});

export default connect(mapStateToProps, { getCustomers, deleteCustomer })(
  Customers
);
