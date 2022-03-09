const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./routes/users");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");
app.use(cors());
require("dotenv").config();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// connect MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.db_userName}:${process.env.db_passWord}@ecommerce.x1kon.mongodb.net/ecommerce?retryWrites=true&w=majority`
  )
  .then(() => console.log("Has connected!!!"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
// app.use("/api/users", Router);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);
app.listen(process.env.PORT || 5000, () => {
  console.log(" server has run");
});
