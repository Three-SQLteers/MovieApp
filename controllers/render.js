const router = require('express').Router();
const apiRoutes = require('./api');
const axios = require('axios');
const { Review } = require('../models');
// const { parse } = require('dotenv');
// const { response } = require('express');
require('dotenv').config();

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
      axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data)   
        res.render('moviereviews',{
          reviewData: response.data
        });
        //res.json(response.data)
      })
    } catch(err) {
      console.log(err)
      // res.json(err)
      res.send("error")
    }
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