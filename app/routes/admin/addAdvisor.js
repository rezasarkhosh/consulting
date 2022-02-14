const express = require('express');
const router = express.Router();
const admin = require('../../controller/admin');
const multer = require('../../multer/uploadImage');
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.get('/', admin.allAdvisors);

router.get('/addAdvisor', admin.addAdvisor);

router.post('/addAdvisor', multer.single('advisorrequest'), admin.addAdvisorProcess);



module.exports = router;