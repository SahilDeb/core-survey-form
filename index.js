import express from "express";
import { config } from "dotenv";
import "./services/passport.js";
import authRoutes from "./routes/auth.js";
import appRoutes from "./routes/app.js";

const app = express();

// Config used to pick variables from .env file
if (process.env.NODE_ENV !== 'production') {
    config();
}

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