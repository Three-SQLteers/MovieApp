const router = require('express').Router();
const axios = require('axios')
require('dotenv').config();

const reviewRoutes = require('./review');



router.get('/:movieName',(req, res) => {
  // '/search/movie?' + API_KEY + '&language=en-US&query='  + movieInput.value + '&page=1&include_adult=false'
  try {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.movieName}&page=1&include_adult=false`)
    .then((response) => {
      
      res.json(response.data)
    })
  } catch(err) {
   
     res.json(err)
    res.send("error")
  }
 
})


router.use('/reviews', reviewRoutes);

module.exports = router;