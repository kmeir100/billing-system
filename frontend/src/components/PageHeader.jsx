import React, { useState } from "react";
import Modal from "react-modal";
import AddTransactionModal from "./AddTransactionModal";

const PageHeader = function () {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>All Transactions</h2>
        </div>
        <div className="col-sm-6">
          <button
            onClick={setModalIsOpenToTrue}
            className="btn btn-success"
            data-toggle="modal"
          >
            <span>Add New Transaction</span>
          </button>
          <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <AddTransactionModal />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
