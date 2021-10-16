import React, { useState } from "react";
import Modal from "react-modal";
import EditTransactionModal from "./EditTransactionModal";
import DeleteTransactionModal from "./DeleteTransactionModal";

const ActionButtons = function (props) {
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modaDeletelIsOpen, setModalDeleteIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const setModalStatus = (event) => {
    if (event.target.classList.contains("edit")) {
      if (event.target.dataset.open === "true") {
        setModalEditIsOpen(true);
      } else {
        setModalEditIsOpen(false);
      }
    }
    if (event.target.classList.contains("delete")) {
      if (event.target.dataset.open === "true") {
        setModalDeleteIsOpen(true);
      } else {
        setModalDeleteIsOpen(false);
      }
    }
  };

  return (
    <td className="btn-group">
      <button
        type="button"
        className="btn btn-warning edit"
        onClick={setModalStatus}
        data-open="true"
      >
        Edit
      </button>
      <Modal isOpen={modalEditIsOpen}>
        <button className="edit" onClick={setModalStatus} data-open="false">
          X
        </button>
        <EditTransactionModal transaction={props.transaction} />
      </Modal>
      <button
        type="button"
        className="btn btn-danger delete"
        onClick={setModalStatus}
        data-open="true"
      >
        Delete
      </button>
      <Modal isOpen={modaDeletelIsOpen}>
        <button className="delete" onClick={setModalStatus} data-open="false">
          X
        </button>
        <DeleteTransactionModal transaction={props.transaction} />
      </Modal>
    </td>
  );
};

export default ActionButtons;
