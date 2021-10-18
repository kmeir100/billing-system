import axios from "axios";
import config from "../configurations/config.json";

const DeleteTransactionModal = function (props) {
  const deleteTransaction = async function () {
    const url = `${config.SERVER_URL}:${config.SERVER_PORT}/${config.TRANSACTION_API.DELETE}`;
    const params = {
      id: props.transaction._id,
    };

    axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios.post(url, params).then(
      (result) => console.log("result:", result),
      (err) => console.log(err)
    );

    props.onFinish();
  };

  return (
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">Delete Transaction</h4>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete this Record?</p>
          <p className="text-warning">
            <small>This action cannot be undone.</small>
          </p>
        </div>
        <div className="modal-footer">
          <input
            type="submit"
            className="btn btn-danger"
            value="Delete"
            data-dismiss="modal"
            onClick={deleteTransaction}
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteTransactionModal;
