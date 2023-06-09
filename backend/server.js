require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Job = require("./routes/api/jobs");
const app = express();
const cors = require("cors");

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
// Routes
app.use("/api/jobs", Job);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
