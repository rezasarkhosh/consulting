class acessLevel {


    isUser(req, res, next) {
        if (req.isAuthenticated() == true) {
            return res.redirect('/user/userPanel');
        } else if (req.isAuthenticated() == false) {

            return next()
        }
    }


    userPanel(req, res, next) {
        if (req.user.isadvisor == true) {
            return res.redirect('/advisorPanel');
        } else if (!req.user) { return res.redirect('/login'); }
        else next();
    }



    isAdvisor(req, res, next) {
        try {
            if (req.user.isadvisor) {
                return next();
            }
            else return res.redirect('/user/userPanel')
        } catch (err) {
            return res.redirect('/');
        }

    }
    isAdmin(req, res, next) {
        if (req.user.isAdmin) {
            return next();
        }
        else return res.redirect('/user/userPanel')

    }
}
module.exports = new acessLevel();