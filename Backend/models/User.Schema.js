const { Schema, model } = require("mongoose");
const types={ type: String, require: true }
const UserSchema = Schema({
  gender:types,
  name: {
    title: types,
    first: types,
    last: types,
  },
  location: {
    city: types,
    state: types,
    country: types,
  },
  email: types,
  login:{
     username:types,
     password:types
  },
  dob: {
    date: types,
    age: types,
  },
  phone: types,
  cell: types,
  picture: {
    large: types,
    medium: types,
    thumbnail: types,
  },
});

const UserModel=model("user",UserSchema)
module.exports=UserModel
