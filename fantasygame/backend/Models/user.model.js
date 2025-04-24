var mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      minLength: [3, "Kindly give atleast firstname of 3 characters"],
    },
    last_name: {
      type: String,
      required: true,
      minLength: [3, "Kindly give atleast lastname of 3 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 12,
    },
    phone_number: {
      type: Number,
      required: true,
      unique: true,
    },
    kyc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "KYC",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
