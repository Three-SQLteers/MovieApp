const router = require('express').Router();

const review = require('./reviewRoutes');

router.use('/', review);

module.exports = router;
