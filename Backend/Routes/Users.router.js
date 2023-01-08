const user = require("express").Router();
const axios = require("axios");
const UserModel = require("../models/User.Schema");
user.get("/getuser", async (req, res) => {
  const perpage = req.query.perpage || 10;
  const page = req.query.page || 1;
  const filter = req.query.filter;
  try {
    if (filter === "undefined") {
      const data = await UserModel.find()

        .limit(perpage)
        .skip(page);
      res.status(200).json(data);
    } else {
      const data = await UserModel.find({ gender: filter })

        .limit(perpage)
        .skip(perpage * page);
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(404).json(err.message);
  }
});

user.post("/postuser", async (req, res) => {
  try {
    let { data } = await axios.get("https://randomuser.me/api/?results=100");

    await PostMultipleData(data.results);
    res.status(200).json(data.results);
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
