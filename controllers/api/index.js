const router = require('express').Router();
const axios = require('axios')
require('dotenv').config();

router.get('/', async (req, res) => {
//     // Add a comment describing the purpose of the render method
//     // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('all');
  });

router.get('/search/:movieName',(req, res) => {

  try {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${req.params.movieName}`)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
  } catch(err) {
    console.log(err)
    // res.json(err)
    res.send("error")
  }
 
})

router.get('/search/:genreName',(req, res) => {

   try {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key==${process.env.API_KEY}&language=en-US`)
    .then((response) => {
      console.log(response.data)
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
//const commentRoutes = require('./comment-routes');

//router.use('/users', userRoutes);
//router.use('/posts', postRoutes);
//router.use('/comments', commentRoutes);

module.exports = router;