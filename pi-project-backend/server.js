const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { indexRouter } = require("./Routes/indexRoute");
require("dotenv").config();
require("./dbConfig/dbConfig");
const port = process.env.PORT;
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/", indexRouter);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});