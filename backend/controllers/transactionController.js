import Transaction from "../models/transactionModel.js";
import asyncHandler from "express-async-handler";

// Create new transaction
export const create = asyncHandler(async (req, res) => {
  const transaction = new Transaction({
    customer_email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    item_name: req.body.item_name,
    date: req.body.date,
    final_price: req.body.price,
    discount: req.body.discount,
  });
  transaction.save(function (err) {
    if (err) return console.log(err);
  });

  res.json(transaction);
});

// Update existing transaction
export const update = asyncHandler(async (req, res) => {
  const filter = { _id: req.body.id };

  const update = {
    customer_email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    item_name: req.body.item,
    date: req.body.date,
    final_price: req.body.price,
    discount: req.body.discount,
  };
  const options = {
    returnOriginal: false,
  };

  Transaction.findOneAndUpdate(filter, update, options, function (err, trans) {
    res.json({ transactions: trans });
  });
});

// Delete transaction
export const deleteItem = asyncHandler(async (req, res) => {
  Transaction.findByIdAndRemove(req.body.id, function (err, trans) {
    res.json({ transactions: trans });
  });
});

// Get all transaction
export const view = asyncHandler(async (req, res) => {
  Transaction.find({}, function (err, trans) {
    res.json({ transactions: trans });
  });
});
