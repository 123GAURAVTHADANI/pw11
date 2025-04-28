const express = require("express");
const { Venue } = require("../Models/venue.model");

const venueRouter = express.Router();

venueRouter.post("/createVenue", (req, res) => {
  try {
    Venue.create(req.body)
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
