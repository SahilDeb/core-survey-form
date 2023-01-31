import express from "express";
import { config } from "dotenv";

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send({ hi: "there" });
})

if (process.env.NODE_ENV !== 'production') {
    config();
}

const PORT = process.env.PORT;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);