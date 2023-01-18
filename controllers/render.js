const router = require('express').Router();
const apiRoutes = require('./api/search');
const axios = require('axios');
//const dashboardRoutes = require('./dashboard-routes.js');
//const homeRoutes = require('./home-routes');
router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('all');
  });

  router.get('/profile', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('profile');
  });

  router.get('/ranking', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('ranking');
  });

  router.get('/search', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('search');
  });

  router.get('/watchlist', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('watchlist');
  });


  router.get('/moviereviews/:id', async (req, res) => {
    try {
      // fix the id and api key here!!!
      axios.get(`https://api.themoviedb.org/3/movie/11?api_key=c37d08875afe5ad2df252dfaa348f06b&language=en-US`)
      .then((response) => {
        console.log(response)
      const movie = (response)
      console.log(movie)
      })
    } catch(err) {
      console.log(err)
      // res.json(err)
      res.send("error")
    }

    res.render('moviereviews');
  });

  router.get('/login', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('login');
  });

// router.use('/', homeRoutes);
 //router.use('/dashboard', review);
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
  });
  

module.exports = router;