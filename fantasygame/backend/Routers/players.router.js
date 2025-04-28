const express = require("express");
const { Player } = require("../Models/players.model");

const playerRouter = express.Router();

playerRouter.post("/createPlayer", (req, res) => {
  try {
    Player.create(req.body)
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

module.exports = { playerRouter };
