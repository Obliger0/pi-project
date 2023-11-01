const express = require("express");
const cors = require("cors");
const { userRouter } = require("./Routes/userRouters");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./dbConfig/dbConfig");
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});