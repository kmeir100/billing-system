import React, { useState } from "react";
import EditTransactionModal from "./EditTransactionModal";
import DeleteTransactionModal from "./DeleteTransactionModal";

const ActionButtons = function (props) {
  const [editId] = useState(`editModal${props.number}`);
  const [editIdWithTag] = useState(`#editModal${props.number}`);

  const [deleteId] = useState(`deleteModal${props.number}`);
  const [deleteIdWithTag] = useState(`#deleteModal${props.number}`);

  return (
    <td className="btn-group">
      <button
        type="button"
        className="btn btn-warning edit"
        data-toggle="modal"
        data-target={editIdWithTag}
      >
        Edit
      </button>
      <div className="modal fade" id={editId} role="dialog">
        <div className="modal-dialog">
          <EditTransactionModal
            transaction={props.transaction}
            number={props.number}
            onFinish={props.onFinish}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-danger delete"
        data-toggle="modal"
        data-target={deleteIdWithTag}
      >
        Delete
      </button>
      <div className="modal fade" id={deleteId} role="dialog">
        <div className="modal-dialog">
          <DeleteTransactionModal
            transaction={props.transaction}
            number={props.number}
            onFinish={props.onFinish}
          />
        </div>
      </div>
    </td>
  );
};

export default ActionButtons;
