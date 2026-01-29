const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middleware/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionController = require("./controllers/transactionCtrl");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

mongoose
  .connect(
    "mongodb+srv://pandeyanshuman361_db_user:NNcvKumDfzHwVqMH@manitracker.akewotg.mongodb.net/?appName=ManiTracker",
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
