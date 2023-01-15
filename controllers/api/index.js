const router = require('express').Router();
require('dotenv').config();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
