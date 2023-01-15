const router = require('express').Router();
//const {Review} = require('../models');
const {Review} = require('../../models');
// Import the custom middleware
//const withAuth = require('../utils/auth');

router.post('/', async (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  // Similar to `INSERT INTO` in plain SQL
  try {
    const postReview = await Review.create({
      review: req.body.review_string,
     
    });
    res.status(200).json(postReview);
    console.log(postReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/', async (req, res) => {
//   // Use Sequelize's `create()` method to add a row to the table
//   // Similar to `INSERT INTO` in plain SQL
// const body = req.body;
//   try {
//     const postReview = await Review.create({
// ...body,
//       review: req.body.review_string,
     
//     });
//     res.json(postReview);
//     console.log(postReview);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



// GET all movies for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbMovieData = await Movie.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const movies = dbMovieData.map((movie) =>
//       movie.get({ plain: true })
//     );

//     res.render('homepage', {
//       movies,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one movie
// // Use the custom middleware before allowing the user to access the movie
// router.get('/movie/:id', withAuth, async (req, res) => {
//   try {
//     const dbMovieData = await Movie.findByPk(req.params.id, {
//       include: [
//         {
//           model: Review,
//           attributes: [
//             'id',
//             'name',
//             'review_integer',
//             'review_string',
//             'date_created',
//             'user_id'
//           ],
//         },
//       ],
//     });

//     const movie = dbMovieData.get({ plain: true });
//     res.render('movie', { movie, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one review
// // Use the custom middleware before allowing the user to access the review
// router.get('/review/:id', withAuth, async (req, res) => {
//   try {
//     const dbReviewData = await Review.findByPk(req.params.id);

//     const review = dbReviewData.get({ plain: true });

//     res.render('review', { review, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

 module.exports = router;
