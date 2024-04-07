const express = require("express");
const indexRouter = express.Router();
const { userRouter } = require("./userRouters");
const { studentRouter } = require("./studentRoutes");
const { adminRouter } = require("./adminRoutes");
const { isLoggedIn } = require("../middleware/middleware");

indexRouter.use("/user",userRouter);
indexRouter.use("/admin", isLoggedIn,adminRouter);
indexRouter.use("/student",isLoggedIn, studentRouter);

module.exports = {
    indexRouter,
}
