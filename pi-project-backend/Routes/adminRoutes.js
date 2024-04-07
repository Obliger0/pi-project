const express = require("express");
const adminRouter = express.Router();
const studentResponses = require("../modals/studentFormModal");

adminRouter.get("/get-all-responses", async (req, res) => {
  try {
    const formRes = await studentResponses.find();
    res.status(200).json({ formRes });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = {
    adminRouter,
}
