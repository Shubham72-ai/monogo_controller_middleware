const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const blogRoute = require("./routes/blog");

require("dotenv").config();

//app

const app = express();

//db

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db");
  });

//middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
app.use(cors());

//routes middlewares

app.use(blogRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`runnig at ${port}`);
});
