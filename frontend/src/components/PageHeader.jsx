import React from "react";
import AddTransactionModal from "./AddTransactionModal";

const PageHeader = function () {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>All Transactions</h2>
        </div>
        <button
          type="button"
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#addModal"
        >
          Add New Transaction
        </button>

        <div className="modal fade" id="addModal" role="dialog">
          <div className="modal-dialog">
            <AddTransactionModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
