const router = require('express').Router();
const apiRoutes = require('./api');
const axios = require('axios');
const { Review, User } = require('../models');
 

require('dotenv').config();


router.get('/', async (req, res) => {

  res.render('all',{

    loggedIn: req.session.loggedIn

});
});

router.get('/search', async (req, res) => {
  res.render('search',{

          loggedIn: req.session.loggedIn

  });
});

router.get('/viewreview', async (req, res) => {
  try {
    axios.get(`https://api.themoviedb.org/3/movie/415?api_key=${process.env.API_KEY}&language=en-US`)
      .then(async (response) => {
        const reviews = await Review.findAll({
          where: {
            movie_id: response.data.id,
       
          }
        });
        res.render('viewreview', {
          reviewData: response.data,
          loggedIn: req.session.loggedIn
        });
        
      })
  } catch (err) {
    console.log(err)
   
    res.send("error")
  }
});


router.get('/moviereviews/:id', async (req, res) => {
  try {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then(async (response) => {
        const reviews = await Review.findAll({
          where: {
            movie_id: response.data.id,
          }
        });


        res.render('moviereviews', {
          reviewData: response.data,
          loggedIn: req.session.loggedIn
        });
      
      })
  } catch (err) {
    console.log(err)
   
    res.send("error")
  }
});

router.get('/moviescore/:id', async (req, res) => {
  try {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then(async (response) => {
        const reviewData = await Review.findAll({
          include: [User],
          where: {
            movie_id: response.data.id
          }
        });

        const reviews = reviewData.map(review => review.get({ plain: true }))
        console.log(reviews);

        const arrayFun = [0]
        const arrayQuality = [0]

        reviews.forEach((score) => {
          arrayFun.push(score.fun_review_integer)
          arrayQuality.push(score.quality_review_integer)
        })

        const averageFun = arrayFun => arrayFun.reduce((a, b) => a + b) / (arrayFun.length - 1);
        const averageQuality = arrayQuality => arrayQuality.reduce((a, b) => a + b) / (arrayQuality.length - 1);

        const reviewObj = {
          funScore: Math.round(averageFun(arrayFun)*100)/100,
          avgScore: Math.round(averageQuality(arrayQuality)*100)/100
        }
        res.render('moviescore', {
          reviews, 
          reviewObj,
          reviewData: response.data,
          loggedIn: req.session.loggedIn

        });

})
  } catch (err) {
    console.log(err)
    res.send("error")
  }
});



router.get('/login', async (req, res) => {
  if(req.session.loggedIn){
    res.redirect('/');
    return
  }
  res.render('login');
});



module.exports = router;