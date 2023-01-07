const user = require("express").Router();

const UserModel = require("../models/User.Schema");
user.get("/getuser", async (req, res) => {
  try {
    const  data  = await UserModel.find()
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

user.post("/postuser", async (req, res) => {
  const { name, location, email, dob, phone, cell, picture } = req.body;

  try {
    const user = new UserModel({
      name,
      location,
      email,
      dob,
      phone,
      cell,
      picture,
    });
    await user.save();
    res.status(200).json({ message: "User added successfully!" });
  } catch (e) {
    res.status(404).json({ message: "Something! went wrong." });
  }
});

user.delete("/deleteusers",async(req,res)=>{
    try{
        const user=await UserModel.deleteMany()
        res.status(200).json({message:"Delete user successfully!"})

    } catch (e) {
        res.status(404).json({ message: "Something! went wrong." });
      }
})

module.exports = user;
