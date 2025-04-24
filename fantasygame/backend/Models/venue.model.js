var mongoose = require("mongoose");

let venueSchema = new mongoose.Schema(
  {
    venue_name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Venue = mongoose.model("Venue", venueSchema);
module.exports = { Venue };
