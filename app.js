import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import "./services/passport.js";
import authRoutes from "./routes/auth.js";
import appRoutes from "./routes/index.js";

const app = express();
config();

mongoose.connect(process.env.MONGO_URI);

authRoutes(app);
appRoutes(app);

const PORT = process.env.PORT;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);