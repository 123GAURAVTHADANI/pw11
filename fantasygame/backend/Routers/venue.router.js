const express = require("express");
const { User } = require("../Models/user.model");

const userRouter = express.Router();

userRouter.post("/createUser", (req, res) => {
  try {
    User.create(req.body)
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

module.exports = { venueRouter };
