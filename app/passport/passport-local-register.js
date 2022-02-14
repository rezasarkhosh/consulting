const User = require('../models/user');
//const errorhandler = require('../controller/errorhandler');


module.exports.local = async (req, username, password, done) => {
    try {

        const user = await User.findOne({ email: username });
        if (user === null || !user) {
            const newUser = User({
                name: req.body.name,
                email: username,
                password: password,
                number: req.body.number,
            })
            await newUser.save();

            done(null, newUser, req.flash("info", "user Successfully registered"));
        }
        else return done(null, false, req.flash("info", "A user has already registered with this username"));
    } catch (err) {
        // const Error = errorhandler(err.errors);
        done(null, false, req.flash("errors", err))
    }
}




module.exports.StrategyName = "register";

module.exports.option = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}