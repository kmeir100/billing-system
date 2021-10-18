import axios from "axios";
import React, { useState } from "react";
import config from "../configurations/config.json";
import { getCustomerDetails } from "../Logic/customer";

const AddTransactionModal = function () {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [item, setItem] = useState("");
  let [date, setDate] = useState("");
  let [price, setPrice] = useState(0);
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

  const createTransaction = async function () {
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

    axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios.post(url, params).then(
      (result) => console.log("add result:", result),
      (err) => console.log(err)
    );
  };

  const addTransaction = async function () {
    console.log("About to add a transaction");

    const customer = await getCustomerDetails(email);
    setName(customer.first_name, customer.last_name);
    setPhone(customer.phone);

    await createTransaction();
  };

  return (
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
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
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
            value="Add"
            onClick={addTransaction}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTransactionModal;
