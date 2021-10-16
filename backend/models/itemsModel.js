import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    price: String,
    name: String,
    description: Number,
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
