const router = require('express').Router();

const review = require('./reviewRoutes.js');

router.use('/', review);
router.use('/api', apiRoutes);
const apiRoutes = require("./api")
router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
