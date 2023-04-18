const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
});

module.exports = Job = mongoose.model("jobs", JobSchema);
