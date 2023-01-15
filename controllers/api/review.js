const router = require('express').Router();
const { Review } = require('../../models');

// CREATE new user
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

module.exports = router;