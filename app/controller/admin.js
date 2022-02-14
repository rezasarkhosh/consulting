const advisor = require('../models/advisor');
const User = require('../models/user');
module.exports = new class {
    Renderpishkhan(req, res) {
        res.render('admin/pishkhan');
    }
    async RenderAdminUsers(req, res) {
        const users = await User.find({});
        req.app.locals.layout = 'admin';
        return res.render('admin/users', { users });
    }
    async allAdvisors(req, res) {
        const advisors = await advisor.find({});
        if (!advisors) {
            return res.render('admin/advisor');
        }
        res.render('admin/advisor', { advisors });
    }
    addAdvisor(req, res) {
        res.render('admin/advisor/addAdvisor');
    }
    async addAdvisorProcess(req, res) {

        const newAdvisor = new advisor({
            name: req.body.name,
            education: req.body.education,
            email: req.body.email,
            date: req.body.date,
            password: req.body.password,
            part: req.body.part,
            isAdvisor: true,
            madrak: req.file.path.slice(26)
        });
        await newAdvisor.save();
        return res.redirect('/admin/advisor');


    }



}