import {
  create,
  view,
  update,
  deleteItem,
} from "../controllers/transactionController.js";
import express from "express";

const router = express.Router();

// express router method to create route for transactions API
router.route("/create").post(create);
router.route("/update").post(update);
router.route("/delete").post(deleteItem);
router.route("/view").get(view);
export default router;
