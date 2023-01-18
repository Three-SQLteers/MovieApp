const router = require('express').Router();
const { Review } = require('../../models');
// const axios = require('axios');
// require('dotenv').config();
// const searchRoutes = require('./search')
// CREATE new review
router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create({
      id: req.body.id,
      movie_name: req.body.name,
      quality_review_integer: req.body.quality_review_integer,
      fun_review_integer: req.body.fun_review_integer,
      review_string: req.body.review_string,
      date_created: req.body.date_created
    });
    req.session.save(() => {
      // req.session.loggedIn = true;
      res.status(200).json(reviewData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Create movie page
router.get('/', async (req, res) => {
      res.render('all');
    });
router.get('/moviereviews/:id', (req, res) => {
console.log('here')
});
// router.use('/search', searchRoutes);
module.exports = router;