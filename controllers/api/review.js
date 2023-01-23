const router = require('express').Router();
const { Review, User } = require('../../models');

  


router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create({
      movie_id: req.body.movie_id,
      quality_review_integer: req.body.quality_review_integer,
      fun_review_integer: req.body.fun_review_integer,
      review_string: req.body.review_string,
      user_id:req.session.user_id
    });
   
      res.status(200).json(reviewData);
    
  } catch (err) {
   
    res.status(500).json(err);
  }

});

module.exports = router;
