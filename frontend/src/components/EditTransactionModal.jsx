import React, { useState } from "react";
import axios from "axios";
import config from "../configurations/config.json";

const EditTransactionModal = function (props) {
  let [email, setEmail] = useState(props.transaction.customer_email);
  let [isEmailChanged, setIsEmailChanged] = useState(false);
  let [name, setName] = useState(props.transaction.name);
  let [phone, setPhone] = useState(props.transaction.phone);
  let [item, setItem] = useState(props.transaction.item_name);
  let [date, setDate] = useState(props.transaction.date);
  let [price, setPrice] = useState(props.transaction.final_price);
  let [discount, setDiscount] = useState(props.transaction.discount);

  setEmail = function (event) {
    email = event.target.value;
    console.log("email: ", email);
    setIsEmailChanged(true);
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
    console.log("get customer params:", params);
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

  const EditTransaction = async function (event) {
    if (isEmailChanged) {
      //update name and phone
      console.log("email changed. email is: ", email);
      await getCustomerDetails(email);
    }
    const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.TRANSACTION_API.UPDATE}`;
    const params = {
      id: event.target.dataset.id,
      email: email,
      name: name,
      phone: phone,
      item: item,
      date: date,
      price: price,
      discount: discount,
    };

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.post(url, params).then(
      (result) => console.log("update result:", result),
      (err) => console.log(err)
    );
  };

  return (
    <div className="modal-dialog" id="edit-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
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
              className="btn btn-info"
              value="Save"
              onClick={EditTransaction}
              data-id={props.transaction._id}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
