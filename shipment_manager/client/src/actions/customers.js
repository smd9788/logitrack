import axios from "axios";

import { GET_CUSTOMERS } from "./types";

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
