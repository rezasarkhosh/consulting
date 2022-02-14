const express = require('express');
const router = express.Router();
const acessLevel = require('../middleware/acessLevel');
const home = require('./home/home');
const admin = require('./admin/index');
const addAdvisor = require('./admin/addAdvisor');
const userpanel = require('./userpanel/index');
const advisorpanel = require('./advisorpanel/index');




router.use('/', home);
router.use('/user', acessLevel.userPanel, userpanel);
router.use('/admin', acessLevel.isAdmin, admin);
router.use('/admin/advisor', acessLevel.isAdmin, addAdvisor);
router.use('/advisorpanel', acessLevel.isAdvisor, advisorpanel);




module.exports = router;

