const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const flash = require('connect-flash');
const mongoose = require('mongoose');

module.exports = new class {
    constructor() {
        this.setconfig();
        this.connectDB();
        this.setRoutes();
        this.createServer();
        this.passport();
    }

    createServer() {
        app.listen(process.env.PORT, () => { console.log(`server running on port ${process.env.PORT}`); });
    }

    connectDB() {
        mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    }
    setconfig() {
        app.use(express.static(path.resolve(__dirname, "../public/")));
        app.engine('handlebars', exphbs({
            defaultLayout: 'admin', runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            },
        }));
        app.set('view engine', 'handlebars');
        app.set('views', "views");
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(methodOverride('_method'));
        app.use(cookieParser(process.env.COOKIE_PARSER_SECRETKEY));
        app.use(session({
            secret: process.env.SESSION_SECRETKEY,
            resave: true,
            saveUninitialized: true,
            cookie: { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10) },
            store: new MongoStore({ mongoUrl: process.env.DATABASE_URL }),
        }));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());
        app.use((req, res, next) => {
            app.locals.user = req.user;
            next()
        });
    }

    setRoutes() {
        app.use(require('./routes/index'));
    };
    passport() {
        require('./passport/passport')
    }
}