import ActionButtons from "./ActionButtons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import config from "../configurations/config.json";

const TableBody = function () {
  const [transactions, setTransactions] = useState([]);

  const getAllTransactions = function () {
    const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.TRANSACTION_API.VIEW}`;
    axios.get(url).then(
      (result) => setTransactions(result.data.transactions),
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <tbody>
      {transactions.map((trans, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{trans.customer_email}</td>
          <td>{trans.name}</td>
          <td>{trans.phone}</td>
          <td>{trans.item_name}</td>
          <td>{new Date(trans.date).toLocaleString()}</td>
          <td>{trans.final_price}</td>
          <td>{trans.discount || "0"}%</td>
          <ActionButtons transaction={trans} />
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
