const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")
const PORT = process.env.PORT || 4500;
const user=require("../Routes/Users.router")
require("dotenv").config();
app.use(cors())
app.use(express.json())
app.use("/",user)
mongoose.connect(process.env.USER_DATABASE).then(() => {
  app.listen(PORT, () => {
    console.log(`Your server is runing on ${PORT}`);
  });
});
