var mongoose = require("mongoose");

let matchSchema = new mongoose.Schema(
  {
    match_no: {
      type: Number,
      required: true,
    },
    team_1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    team_2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    venue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
    },
    match_date: {
      type: Date,
      required: true,
    },
    team_1_score: {
      wicket1: Number,
      score1: Number,
      over1: Number,
    },
    team_2_score: {
      wicket2: Number,
      score2: Number,
      over2: Number,
    },
    match_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Match = mongoose.model("Match", matchSchema);
module.exports = { Match };
