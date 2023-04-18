const dotenv = require("dotenv");

module.exports = {
  mongoURI: "mongodb://127.0.0.1:27017/devjobs",
  // mongoURI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}?retryWrites=true&w=majority`,
};
