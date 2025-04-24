var mongoose = require("mongoose");

let playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    playerType: {
      type: String,
      enum: ["Batsman", "Bowler", "WicketKeeper", "All-rounder"],
    },
    height: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);
module.exports = { Player };
