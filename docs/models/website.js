const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  URL: { type: String, required: true },
  thumbnail: { type: String, required: true },
  summary: String,
  date: { type: Date, default: Date.now }
});

const website = mongoose.model("Website", websiteSchema);

module.exports = website;
