const express = require("express");
const { Contest } = require("../Models/contest.model");

const contestRouter = express.Router();

contestRouter.post("/createContest", (req, res) => {
  try {
    Contest.create(req.body)
      .then((response) => {
        res.status(201).json({ Message: "Data inserted!!!", data: response });
      })
      .catch((err) => {
        res.status(500).json({ Message: "Something went Wrong!!", error: err });
      });
  } catch (error) {
    res.status(500).json({ Message: "Something went Wrong!!", error: err });
  }
});

module.exports = { contestRouter };
