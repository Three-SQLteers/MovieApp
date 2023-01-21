const router = require('express').Router();

const {Review} = require('../../models');


router.get('/', (req, res) => {
  try {
  const userReviews = Review.findAll({
    movie_id: req.body.movie_id,
    review_string: req.body.review_string
  });
  res.status(200).json(userReviews);
} catch (err) {
  res.status(400).json(err);
}
});

router.post('/', async (req, res) => {
  try {
    const postReview = await Review.create({
      movie_id: req.body.movie_id,
      quality_review_integer: req.body.quality_review_integer,
      fun_review_integer: req.body.fun_review_integer,
      review_string: req.body.review_string,
      user_id:req.session.user_id
    });
    res.status(200).json(postReview);
    console.log(postReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

 module.exports = router;
