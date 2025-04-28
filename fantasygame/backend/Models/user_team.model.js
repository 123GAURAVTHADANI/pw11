var mongoose = require("mongoose");

let userTeam = new mongoose.Schema(
  {
    team_name: {
      type: String,
      required: true,
    },
    possible_eleven: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
    contest_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contest",
      },
    ],
    match_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
    score: {
      type: Number,
      default: 25,
    },
    team_1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    team_2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  { timestamps: true }
);

const UserTeam = mongoose.model("UserTeam", userTeam);
module.exports = { UserTeam };
