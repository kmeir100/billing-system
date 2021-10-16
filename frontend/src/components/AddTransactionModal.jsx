import axios from "axios";
import React, { useState } from "react";
import config from "../configurations/config.json";

const AddTransactionModal = function () {
  let [email, setEmail] = useState([]);
  let [name, setName] = useState([]);
  let [phone, setPhone] = useState([]);
  let [item, setItem] = useState([]);
  let [date, setDate] = useState([]);
  let [price, setPrice] = useState([]);
  let [discount, setDiscount] = useState(0);

  setEmail = function (event) {
    email = event.target.value;
  };
  setName = function (first_name, last_name) {
    name = `${first_name} ${last_name}`;
  };
  setPhone = function (customer_phone) {
    phone = customer_phone;
  };
  setItem = function (event) {
    item = event.target.value;
  };
  setDate = function (event) {
    date = event.target.value;
  };
  setPrice = function (event) {
    price = event.target.value;
  };
  setDiscount = function (event) {
    discount = event.target.value;
  };

  const getCustomerDetails = function (email) {
    const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.CUSTOMER_API.VIEW}`;
    const params = {
      email: email,
    };

    return axios.get(url, { params }).then(
      (result) => {
        setName(
          result.data.customer[0].first_name,
          result.data.customer[0].last_name
        );
        setPhone(result.data.customer[0].phone);
      },
      (err) => console.log("get customer error:", err)
    );
  };

  const addTransaction = async function () {
    console.log("About to add transaction");
    axios.defaults.headers.post["Content-Type"] = "application/json";

    await getCustomerDetails(email);

    const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.TRANSACTION_API.CREATE}`;
    const params = {
      email: email,
      name: name,
      phone: phone,
      item_name: item,
      date: date,
      price: price,
      discount: discount,
    };
    axios.post(url, params).then(
      (result) => console.log("add result:", result),
      (err) => console.log(err)
    );
  };

  // ADD:
  //   V remove name and phone, take it from customer DB
  //   V email is a unique id for a user
  // Edit:
  //   V name and phone not editable, if email changes, take them from DB
  // All:
  //   V CONST Variables in configuration file
  // TODO:
  //      input validation
  //      Login
  //      do not erase data from db, add deleted flag
  //      return ok to client
  //      add filter, sort
  //      fix cancel buttons
  //      fix date in "edit" form
  //      currency adaptations
  //      discount- if null write 0%

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Add Transaction</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                onChange={setEmail}
              />
            </div>
            <div className="form-group">
              <label>Item</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={setItem}
              ></input>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                required
                onChange={setDate}
              ></input>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                required
                onChange={setPrice}
              ></input>
            </div>
            <div className="form-group">
              <label>Discount(%)</label>
              <input
                type="number"
                className="form-control"
                onChange={setDiscount}
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="submit"
              className="btn btn-success"
              value="Add"
              onClick={addTransaction}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
