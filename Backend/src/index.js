const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4500;
const user=require("../Routes/GetUser.router")
require("dotenv").config();
app.use(express.json())
app.use("/",user)
mongoose.connect(process.env.USER_DATABASE).then(() => {
  app.listen(PORT, () => {
    console.log(`Your server is runing on ${PORT}`);
  });
});
