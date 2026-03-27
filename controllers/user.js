const User = require("../models/user");


// SIGNUP FORM
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};


// SIGNUP LOGIC
module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};


// LOGIN FORM
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};


// LOGIN LOGIC
module.exports.login = (req, res) => {
    let redirectUrl = res.locals.redirectUrl || "/listings";

    req.flash("success", "Welcome to Wanderlust");
    res.redirect(redirectUrl);
};


// LOGOUT
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};