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

userTeam.post("/updateScorePoints", async (req, res) => {
  try {
    let { team_1, team_2, new_score } = req.body;
    const userTeams = await UserTeam.find({ team_1: team_1, team_2: team_2 }); 
    const score_diff = new_score - 
    await UserTeam.updateMany({ team_1: team_1, team_2: team_2 },{$inc:{}});
    res.json({ data: userTeams });
  } catch (error) {
    res.status(500).json({ Message: "Something went Wrong!!", error: err });
  }
});

module.exports = { userTeam };
