const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
require('./passport-conf')();

const login = require('./passport-local-login');
const register = require('./passport-local-register');
const advisorAuth = require('./passport-auth-advisor');


passport.use(login.StrategyName, new LocalStrategy(login.option, login.local));

passport.use(register.StrategyName, new LocalStrategy(register.option, register.local));

passport.use(advisorAuth.StrategyName, new LocalStrategy(advisorAuth.option, advisorAuth.advisorAuth));
