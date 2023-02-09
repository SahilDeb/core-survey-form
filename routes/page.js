const BASE_URL = '/api/';

const appRoutes = (app) => {
    app.use(BASE_URL + "login", (req, res) => {
        res.send({ page: "Login" });
    })
    
    app.get(BASE_URL + 'surveys', (req, res) => {
        res.send({ page: "Home", user: req.user, session: req.session })
    });
};

export default appRoutes;