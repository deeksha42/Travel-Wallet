const Log = require("../models/logModel");
const asyncHandler = require("express-async-handler");

const getLogs = asyncHandler(async (req, res) => {
  const logs = await Log.find({ user: req.user._id });
  res.json(logs);
});

const createLog = asyncHandler(async (req, res) => {
  const {
    title,
    destination,
    itinerary,
    category,
    budget,
    startDate,
    endDate,
  } = req.body;

  if (
    !title ||
    !destination ||
    !itinerary ||
    !category ||
    !budget ||
    !startDate ||
    !endDate
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const log = new Log({
      user: req.user._id,
      title,
      destination,
      itinerary,
      category,
      budget,
      startDate,
      endDate,
    });

    const createdLog = await log.save();

    res.status(201).json(createdLog);
  }
});

const getLogById = asyncHandler(async (req, res) => {
  const log = await Log.findById(req.params.id);

  if (log) {
    res.json(log);
  } else {
    res.status(404).json({ message: "Log not found" });
  }

  res.json(log);
});

const UpdateLog = asyncHandler(async (req, res) => {
  const {
    title,
    destination,
    itinerary,
    category,
    budget,
    startDate,
    endDate,
  } = req.body;

  const log = await Log.findById(req.params.id);

  if (log.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (log) {
    log.title = title;
    log.destination = destination;
    log.category = category;
    log.itinerary = itinerary;
    log.budget = budget;
    log.startDate = startDate;
    log.endDate = endDate;

    const updatedLog = await log.save();
    res.json(updatedLog);
  } else {
    res.status(404);
    throw new Error("Log not found");
  }
});

const DeleteLog = asyncHandler(async (req, res) => {
  const log = await Log.findById(req.params.id);

  if (log.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (log) {
    await log.deleteOne();
    res.json({ message: "Log Removed" });
  } else {
    res.status(404);
    throw new Error("Log not Found");
  }
});

module.exports = { getLogs, createLog, getLogById, UpdateLog, DeleteLog };
