import passport from "passport";

/* GET /auth/google/accounts.google.com
 *
 * This route redirects the user to Google, where they will authenticate.
 *
 * Signing in with Google is implemented using OAuth 2.0.  This route initiates
 * an OAuth 2.0 flow by redirecting the user to Google's identity server at
 * 'https://accounts.google.com'.  Once there, Google will authenticate the user
 * and obtain their consent to release identity information to this app.
 *
 * Once Google has completed their interaction with the user, the user will be
 * redirected back to the app at `GET /auth/google/callback/accounts.google.com`.
 */

const BASE_URL = '/auth/';

const authRoutes = (app) => {
    app.use(BASE_URL + "google",
        passport.authenticate("google", { scope: ['profile'] })
    );

    
    app.get(BASE_URL + 'google/callback',
    passport.authenticate('google'),
    async (err, req, res, next) => {
        // Successful authentication, redirect home.
        res.redirect('/api/surveys');
    });

    app.use(BASE_URL + "logout", (req, res) => {
        req.logout();
        res.send(req.user);
    });
};

export default authRoutes;