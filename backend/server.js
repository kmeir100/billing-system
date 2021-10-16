import connectDB from "./config/db.js";
import customerRoutes from "./routes/customerRoute.js";
import transactionRoutes from "./routes/transactionRoute.js";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

//connect database
connectDB();

//dotenv config
dotenv.config();

const app = express();

//Creating API for customer and transactions
app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", transactionRoutes);
app.use("/customer", customerRoutes);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
