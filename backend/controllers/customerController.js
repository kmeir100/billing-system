import Customer from "../models/customerModel.js";
import asyncHandler from "express-async-handler";

//getCustomers function to get all customers
export const getCustomers = asyncHandler(async (req, res) => {
  const filter = { email: req.query.email };
  console.log("get cust:", filter);
  Customer.find(filter, function (err, customer) {
    res.json({ customer: customer });
  });
});
