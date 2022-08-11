import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import loginRouter from "./routes/login.js";
import registerEmployerRouter from "./routes/registerEmployer.js";
import userEmployerDataRouter from "./routes/userEmployerData.js";
import userDeveloperDataRouter from "./routes/userDeveloperData.js";
import jobsRouter from "./routes/jobs.js";

import registerDeveloperRouter from "./routes/registerDeveloper.js";
import morgan from "morgan";
import CVrouter from "./routes/cvRoute.js";

const app = express();
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mj4qp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

mongoose.connection.on("open", () =>
  console.log("Database connection established")
);
mongoose.connection.on("error", () => console.error);

app.use(cors());

app.use(express.json());

app.use(morgan("tiny"))

app.use("/login", loginRouter);
app.use("/register-developer", registerDeveloperRouter);

app.use("/register-employer", registerEmployerRouter);


//app.use("/developers", userDeveloperDataRouter);

app.use("/developers", userDeveloperDataRouter);
app.use("/employers", userEmployerDataRouter);

app.use("/jobs", jobsRouter);
app.use("/cv", CVrouter)

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server has started on port ${process.env.port || 3001}!`);
});

//server.address().port

// const server = app.listen(process.env.PORT || 0, () => {
//   console.log(`Server has started on port ${process.env.port || server.address().port}!`);
// });
