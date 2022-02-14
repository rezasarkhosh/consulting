const freeReq = require('../models/freeReq');
module.exports = new class {
    async Render(req, res) {
        req.app.locals.layout = 'moshaver';
        const freeReqs = await freeReq.find({});
        res.render('home/index', { info: req.flash("info") , freeReqs })
    }
   
}