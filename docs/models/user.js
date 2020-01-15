const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "_id" : ObjectId,
    "username" : "USERNAME",
    "email" : "EMAIL",
    "password" : "PASSWORD"
});

const User = mongoose.model("User", userSchema);

module.exports = User;