const router = require('express').Router();
const { Review } = require('../../models');
const axios = require('axios');
// require('dotenv').config();

// const searchRoutes = require('./search')


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

// // Create movie page
// router.get('/', async (req, res) => {
//       res.render('all');
//     });

// router.get('/search/:movieName', (req, res) => {

//   try {
//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${req.params.movieName}`)
//     .then((response) => {
//       console.log(response.data)
//       res.json(response.data)
//     })
//   } catch(err) {
//     console.log(err)
//     // res.json(err)
//     res.send("error")
//   }
// });

// router.use('/search', searchRoutes);
module.exports = router;