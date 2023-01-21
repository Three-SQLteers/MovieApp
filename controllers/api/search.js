const router = require('express').Router();
const axios = require('axios')
require('dotenv').config();

const reviewRoutes = require('./review');

// router.get('/', async (req, res) => {
// //     // Add a comment describing the purpose of the render method
// //     // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
//     res.render('all');
//   });

router.get('/:movieName',(req, res) => {
  // '/search/movie?' + API_KEY + '&language=en-US&query='  + movieInput.value + '&page=1&include_adult=false'
  try {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.movieName}&page=1&include_adult=false`)
    .then((response) => {
      
      res.json(response.data)
    })
  } catch(err) {
    console.log(err)
    // res.json(err)
    res.send("error")
  }
 
})

router.get('/:genreName',(req, res) => {

   try {
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${req.params.genre_id}`)
    .then((response) => {
      res.json(response.data)
    })
  } catch(err) {
   console.log(err)
    // res.json(err)
    res.send("error")
   }
  })
// //const userRoutes = require('./user-routes.js');
//const postRoutes = require('./post-routes');
//const reviewRoutes = require('./reviewRoutes');

//router.use('/users', userRoutes);
//router.use('/posts', postRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;