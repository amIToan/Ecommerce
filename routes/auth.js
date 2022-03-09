const Router = require("express").Router();
const User = require("../models/User");
const encryptJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
Router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: encryptJS.AES.encrypt(
      req.body.password,
      process.env.access_Token
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Login
Router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json(" Wrongs credentials");
    const originPass = encryptJS.AES.decrypt(
      user.password,
      process.env.access_Token
    ).toString(encryptJS.enc.Utf8);
    originPass !== req.body.password &&
      res.status(401).json("Wrong credentials");
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.access_Token,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = Router;
