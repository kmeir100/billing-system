import TableHeader from "./TableHeader";
// import axios from "axios";
// import ActionButtons from "./ActionButtons";
// import React, { useState, useEffect } from "react";
// import config from "../configurations/config.json";
import TableBody from "./TableBody";

const TransactionsTable = function () {
  // const [transactions, setTransactions] = useState([]);

  // const getAllTransactions = function () {
  //   const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.TRANSACTION_API.VIEW}`;
  //   axios.get(url).then(
  //     (result) => setTransactions(result.data.transactions),
  //     (err) => console.log(err)
  //   );
  // };

  // useEffect(() => {
  //   getAllTransactions();
  // }, []);

  return (
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default TransactionsTable;
