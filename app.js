import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cookieSession from "cookie-session";
import passport from "passport";
import authRoutes from "./routes/auth.js";

import "./models/User.js";
import "./services/passport.js";
import appRoutes from "./routes/page.js";

const app = express();
config();

mongoose.connect(process.env.MONGO_URI);

app.use(
    cookieSession({
    keys: [process.env.COOKIE_SECRET_KEY],
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
})
);

app.use(passport.initialize());
app.use(passport.session());

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