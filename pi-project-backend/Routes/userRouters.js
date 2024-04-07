const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../modals/userModal");
const { isLoggedIn } = require("../middleware/middleware");

userRouter.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      const hashedPass = await bcrypt.hash(password, 10);
      user = await User.create({
        email,
        name,
        password: hashedPass,
        userType,
      });
      res.status(200).json({ user });
    } else {
      res.status(201).json({ msg: "email already exist" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
});

userRouter.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean();
    if (user) {
      const { password: savedPassword, ...userData } = user;
      const isPasswordCorrect = await bcrypt.compare(password, savedPassword);
      if (isPasswordCorrect) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET);
        res
          .cookie(process.env.JWT_SECRET_KEY, token)
          .status(200)
          .json({ userData, msg: "user sucessfully logged In.", token });
      } else {
        res.status(401).json({ msg: "Incorrect password" });
      }
    } else {
      res.status(401).json({ msg: "Email address not found" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
});

userRouter.get("/logout", isLoggedIn, (req, res) => {
  try {
    res
      .status(200)
      .clearCookie(process.env.JWT_SECRET_KEY)
      .json({ msg: "logout successfully" });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ error });
  }
});

module.exports = {
  userRouter,
};
