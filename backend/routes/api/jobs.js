const express = require("express");
const router = express.Router();
// Load User model
const Job = require("../../models/Job");

// Add a new route to fetch all jobs
router.get("/all", (req, res) => {
  Job.find()
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error fetching jobs" });
    });
});

module.exports = router;
