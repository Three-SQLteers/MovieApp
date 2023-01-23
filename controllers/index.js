const router = require('express').Router();

const apiRoutes = require('../controllers/api');
const searchRoutes = require('./render.js');

router.use('/', searchRoutes);
router.use('/api', apiRoutes);

module.exports = router;
