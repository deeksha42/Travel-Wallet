const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    itinerary: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    budget: {
      type: Number, // Change type to Number for budget
      required: true,
    },
    startDate: {
      type: Date, // Change type to Date for startDate
      required: true,
    },
    endDate: {
      type: Date, // Change type to Date for endDate
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
