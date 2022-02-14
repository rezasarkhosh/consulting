const User = require('../models/user');
const bcrypt = require('bcrypt');
module.exports.local = async (req, username, password, done) => {
    const user = await User.findOne({ email: username });
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, req.flash('info', "Incorrect password or username"));
    }
    else if (user) {
        done(null, user);
    }
}




module.exports.option = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}

module.exports.StrategyName = "login"
