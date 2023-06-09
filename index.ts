import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { dbConnection } from "./db";
// End Point routes to be here
// import { fish } from "./models/fish.model";
const fishRouter = require("./Routes/fish.route");
const userRouter = require("./Routes/users.route");
const decorationRouter = require("./Routes/decorations.route");
const utilityRouter = require("./Routes/utilities.route");
const buildRouter = require("./Routes/builds.route");
const tankRouter = require("./Routes/tanks.routes");
const userBuildsRouter = require('./Routes/userBuilds.route')
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// const uri = process.env.CLUSTER

//MiddleWare
app.use(cors()); // Avoid cors error
app.use(express.json()); //Get params from the body
app.use(fishRouter);
app.use(userRouter);
app.use(decorationRouter);
app.use(utilityRouter);
app.use(buildRouter);
app.use(tankRouter);
app.use(userBuildsRouter);

mongoose.set("strictQuery", false);
dbConnection().then(() => {
  console.log("Server listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Server is now working");
});

app.listen(port, () => {
  console.log(`FinFinder server is now running on port ${port}`);
});
