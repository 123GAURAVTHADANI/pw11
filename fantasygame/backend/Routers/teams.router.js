const express = require("express");
const { Team } = require("../Models/teams.model");

const teamRouter = express.Router();

teamRouter.post("/createTeam", (req, res) => {
  try {
    Team.create(req.body)
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

module.exports = { teamRouter };
