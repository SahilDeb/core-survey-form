const appRoutes = (app) => {
    app.use("/login", (req, res) => {
        res.send({ page: "Login" });
    })
    
    app.get('/home', (req, res) => {
        res.send({ page: "Home" })
    });
};

export default appRoutes;