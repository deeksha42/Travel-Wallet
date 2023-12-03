const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");
const logRoutes = require("./routes/logRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

// Enable CORS for all routes
app.use(cors());

dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRoutes);
app.use("/api/logs", logRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
