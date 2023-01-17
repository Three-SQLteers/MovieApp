const router = require('express').Router();
const { Review } = require('../../models');
const axios = require('axios');
// require('dotenv').config();

// const searchRoutes = require('./search')


// CREATE new review
router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create({
      name: req.body.name,
      review_string: req.body.review_string,
    
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