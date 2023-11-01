const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../modals/userModal");
const studentResponses = require("../modals/studentFormModal");

const userRouter = express.Router();

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
          .status(200)
          .cookie(process.env.JWT_SECRET_KEY, token)
          .json({ userData, msg: "user sucessfully logged In." });
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

userRouter.post("/form", async (req, res) => {
  try {
    const { userId, name, email, number, file } = req.body;
    // console.log(req.body);
    // console.log({ userId : typeof userId, name : typeof name, email: typeof email, number: typeof number, file: typeof file });
    const formRes = await studentResponses.create({
      userId,
      email,
      name,
      number,
      file,
    });
    res.status(200).json({ formRes });
  } catch (err) {
    res.status(400).json({ err });
  }
});

userRouter.post("/get-user-responses", async (req, res) => {
  try {
    const { userId } = req.body;
    const formRes = await studentResponses.find({ userId });
    res.status(200).json({ formRes });
  } catch (err) {
    res.status(400).json({ err });
  }
});

userRouter.get("/get-all-responses", async (req, res) => {
  try {
    const formRes = await studentResponses.find();
    res.status(200).json({ formRes });
  } catch (err) {
    res.status(400).json({ err });
  }
});


module.exports = {
  userRouter,
};
