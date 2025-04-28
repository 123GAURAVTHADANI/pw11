var mongoose = require("mongoose");

let teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      required: true,
    },
    team_captain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    team_vice_captain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    team_home_ground: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
    },
    team_matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
      },
    ],
    team_players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);
module.exports = { Team };
