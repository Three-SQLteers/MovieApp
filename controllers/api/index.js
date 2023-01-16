const router = require('express').Router();
require('dotenv').config();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review');
const profileRoutes = require('./profile')

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/profile', profileRoutes)

module.exports = router;
