const express = require("express");
const router = express.Router();
const {
  getLogs,
  createLog,
  getLogById,
  UpdateLog,
  DeleteLog,
} = require("../controllers/logControllers");
const { protect } = require("../middlewares/authMiddlewares");

router.route("/").get(protect, getLogs);
router.route("/create").post(protect, createLog);
router
  .route("/:id")
  .get(getLogById)
  .put(protect, UpdateLog)
  .delete(protect, DeleteLog);

module.exports = router;
