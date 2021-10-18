import axios from "axios";
import config from "../configurations/config.json";

export async function getCustomerDetails(email) {
  const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.CUSTOMER_API.VIEW}`;
  const params = {
    email: email,
  };
  console.log("get cust params:", params);
  let customer = {};
  await axios.get(url, { params }).then(
    (result) => {
      customer = result.data.customer[0];
    },
    (err) => console.log("get customer error:", err)
  );
  return customer;
}
