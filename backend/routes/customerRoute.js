import { getCustomers } from "../controllers/customerController.js";
import express from "express";
const router = express.Router();

// express router method to create route for customers API
router.route("/view").get(getCustomers);

export default router;
