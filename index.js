import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send({ hi: "there" });
})

const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);