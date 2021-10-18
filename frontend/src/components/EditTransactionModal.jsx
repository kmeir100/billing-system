import React, { useState } from "react";
import axios from "axios";
import config from "../configurations/config.json";
import { getCustomerDetails } from "../Logic/customer";
import { getFormatedDate } from "../Utils/utils";

const EditTransactionModal = function (props) {
  let [id] = useState(props.transaction._id);
  let [email, setEmail] = useState(props.transaction.customer_email);
  let [isEmailChanged, setIsEmailChanged] = useState(false);
  let [name, setName] = useState(props.transaction.name);
  let [phone, setPhone] = useState(props.transaction.phone);
  let [item, setItem] = useState(props.transaction.item_name);
  let [date, setDate] = useState(
    getFormatedDate(new Date(props.transaction.date))
  );
  let [price, setPrice] = useState(props.transaction.final_price);
  let [discount, setDiscount] = useState(props.transaction.discount);

  setEmail = function (event) {
    email = event.target.value;
    setIsEmailChanged(true);
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

  const updateTransacion = async function () {
    const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.TRANSACTION_API.UPDATE}`;
    const params = {
      id: id,
      email: email,
      name: name,
      phone: phone,
      item: item,
      date: date,
      price: price,
      discount: discount,
    };

    axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios.post(url, params).then(
      (result) => console.log("update result:", result),
      (err) => console.log(err)
    );
  };

  const EditTransaction = async function () {
    //update name and phone
    if (isEmailChanged) {
      const customer = await getCustomerDetails(email);
      setName(customer.first_name, customer.last_name);
      setPhone(customer.phone);
    }

    await updateTransacion();

    props.onFinish();
  };

  return (
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">Edit Transaction</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Email</label>
            <input
              defaultValue={email}
              type="email"
              className="form-control"
              required
              onChange={setEmail}
            />
          </div>
          <div className="form-group">
            <label>Item</label>
            <input
              defaultValue={item}
              type="text"
              className="form-control"
              required
              onChange={setItem}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              defaultValue={date}
              type="date"
              className="form-control"
              required
              onChange={setDate}
            ></input>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              defaultValue={price}
              type="number"
              className="form-control"
              required
              onChange={setPrice}
            ></input>
          </div>
          <div className="form-group">
            <label>Discount</label>
            <input
              defaultValue={discount}
              type="number"
              className="form-control"
              required
              onChange={setDiscount}
            ></input>
          </div>
        </div>
        <div className="modal-footer">
          <input
            type="submit"
            className="btn btn-default modal-transaction"
            data-dismiss="modal"
            value="Update"
            onClick={EditTransaction}
          />
        </div>
      </form>
    </div>
  );
};

export default EditTransactionModal;
