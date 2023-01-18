const router = require('express').Router();
const apiRoutes = require('./api');
const axios = require('axios');
require('dotenv').config();
//const dashboardRoutes = require('./dashboard-routes.js');
//const homeRoutes = require('./home-routes');
router.get('/', async (req, res) => {
    res.render('all');
  });
  router.get('/profile', async (req, res) => {
    res.render('profile');
  });
  router.get('/ranking', async (req, res) => {
    res.render('ranking');
  });
  router.get('/search', async (req, res) => {
    res.render('search');
  });
  router.get('/watchlist', async (req, res) => {
    res.render('watchlist');
  });

  router.get('/moviereviews/:id', async (req, res) => {
    try {
      axios.get(`https://api.themoviedb.org/3/movie/414906?api_key=${process.env.API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data)
        //res.json(response.data)
      })
    } catch(err) {
      console.log(err)
      // res.json(err)
      res.send("error")
    }

    res.render('moviereviews');
  });

  router.get('/login', async (req, res) => {
    res.render('login');
  });
// router.use('/', homeRoutes);
 //router.use('/dashboard', review);
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;