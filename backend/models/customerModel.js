import mongoose from "mongoose";

//customer scheme
const customerSchema = mongoose.Schema(
  {
    customer_id: String,
    first_name: String,
    last_Name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: String,
    country: String,
    city: String,
    street: String,
    phone: String,
    total_price: Number,
    currency: String,
    cerdit_card_type: String,
    cerdit_card_number: Number,
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
