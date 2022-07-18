import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import loginRouter from "./routes/login.js";
import registerEmployerRouter from "./routes/registerEmployer.js";

import registerDeveloperRouter from "./routes/registerDeveloper.js";

const app = express();
dotenv.config();

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mj4qp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  

  mongoose.connection.on("open", () =>
  console.log("Database connection established")
);
mongoose.connection.on("error", () => console.error);

app.use(cors({origin:"http://localhost:3000", credentials:true}));
app.use(express.json());



app.use("api/login", loginRouter);
app.use("/register-developer", registerDeveloperRouter);
app.use("api/registerEmployer", registerEmployerRouter);



app.listen(process.env.PORT || 3001, () => {
    console.log(`Server has started on port ${process.env.port || 3001}!`);
  });