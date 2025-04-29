const express = require("express");
const { Match } = require("../Models/matches.model");
const { UserTeam } = require("../Models/user_team.model");

const matchRouter = express.Router();

matchRouter.post("/createMatch", (req, res) => {
  try {
    Match.create(req.body)
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

matchRouter.patch("/updateScore/:matchId/:team", async (req, res) => {
  try {
    let { matchId, team } = req.params;

    let updateField = {
      $set: {
        [team]: {
          wicket1: req.body.wicket,
          score1: req.body.score,
          over1: req.body.over,
        },
      },
    };
    let match = await Match.findOne({ _id: matchId });

    let newScore = req.body.score - match[team].score1;

    let points = newScore * 2;

    const result = await Match.findByIdAndUpdate(matchId, updateField, {
      new: true,
    });

    const userTeams = await UserTeam.updateMany(
      { match_id: matchId },
      {
        $inc: { score: points },
      },
      { new: true }
    );
  
    res
      .status(200)
      .json({ Message: "Score Updated Succesfully", data: userTeams });
  } catch (error) {
    res
      .status(500)
      .json({ Message: "Something went Wrong!!", error: error.message });
  }
});

module.exports = { matchRouter };

// wait for 1 min pls sorry
