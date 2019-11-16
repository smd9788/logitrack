import axios from "axios";

import { GET_CUSTOMERS, DELETE_CUSTOMER } from "./types";

// GET CUSTOMERS
export const getCustomers = () => dispatch => {
  axios
    .get("/api/customers/")
    .then(res => {
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE CUSTOMER
export const deleteCustomer = id => dispatch => {
  axios
    .delete(`/api/customers/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
