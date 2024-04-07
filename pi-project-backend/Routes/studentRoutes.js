const express = require("express");
const studentRouter = express.Router();
const studentResponses = require("../modals/studentFormModal");
const { imageRouter } = require("./imageRoutes");
const { isLoggedIn } = require("../middleware/middleware");

studentRouter.use("/image", isLoggedIn, imageRouter);

studentRouter.post("/form", async (req, res) => {
  try {
    const { _id :userId } = req.user;
    const { name, email, number, file } = req.body;
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

studentRouter.post("/get-user-responses", async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const formRes = await studentResponses.find({ userId });
    res.status(200).json({ formRes });
  } catch (err) {
    res.status(400).json({ err });
  }
});


module.exports = {
    studentRouter,
}