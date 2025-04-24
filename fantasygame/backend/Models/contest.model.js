var mongoose = require("mongoose");

let contestSchema = new mongoose.Schema(
  {
    contest_pool_amount: {
      type: Number,
      default: 0,
      required: true,
    },
    contest_name: {
      type: String,
      default: "Practice Contest",
      required: true,
    },
    contest_capacity: {
      type: Number,
      required: true,
    },
    contest_teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserTeam",
      },
    ],
    wining_price: {
      type: Number,
      default: 0,
      required: true,
    },
    contest_match: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  },
  { timestamps: true }
);

const Contest = mongoose.model("Contest", contestSchema);
module.exports = { Contest };
