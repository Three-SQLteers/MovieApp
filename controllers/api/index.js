const router = require('express').Router();
require('dotenv').config();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review');
const searchRoutes = require('./search');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/search', searchRoutes)

module.exports = router;
