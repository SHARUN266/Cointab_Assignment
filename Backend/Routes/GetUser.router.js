const user = require("express").Router();
const axios = require("axios");
const UserModel = require("../models/User.Schema");
user.get("/getuser", async (req, res) => {
  const perpage = req.query.perpage || 10;
  const page = req.query.page || 1;
  try {
    const data = await UserModel.find().limit(perpage).skip(page);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

user.post("/postuser", async (req, res) => {
  let tempArray = [];
  try {
    for (var i = 0; i < 50; i++) {
      let { data } = await axios.get("https://randomuser.me/api/");

      tempArray.push(data.results[0]);
    }
    await PostMultipleData(tempArray);
    res.status(200).json(tempArray);
  } catch (e) {
    res.status(404).json({ message: "Something! went wrong." });
  }
});
const PostMultipleData = async (data) => {
  try {
    const user = UserModel.insertMany(data);
    await user.save();
  } catch (e) {
    console.log(e.message);
  }
};

user.delete("/deleteusers", async (req, res) => {
  try {
    await UserModel.deleteMany();
    res.status(200).json({ message: "Delete user successfully!" });
  } catch (e) {
    res.status(404).json({ message: "Something! went wrong." });
  }
});

module.exports = user;
