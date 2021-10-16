import mongoose from "mongoose";

//transactions scheme
const transactionSchema = mongoose.Schema(
  {
    customer_email: String,
    name: String,
    phone: String,
    item_id: Number,
    item_name: String,
    date: { type: Date, default: Date.now },
    final_price: Number,
    discount: Number,
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
