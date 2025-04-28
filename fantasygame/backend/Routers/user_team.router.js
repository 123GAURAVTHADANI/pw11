const express = require("express");
const { UserTeam } = require("../Models/user_team.model");
const { Match } = require("../Models/matches.model");

const userTeam = express.Router();

userTeam.post("/createUserTeam", async (req, res) => {
  try {
    UserTeam.create(req.body)
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

module.exports = { userTeam };
