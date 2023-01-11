const router = require('express').Router();

//const dashboardRoutes = require('./dashboard-routes.js');
//const homeRoutes = require('./home-routes');
router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('all');
  });

// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/api', apiRoutes);
// router.use((req, res) => {
//     res.status(404).end();
//   });
  

module.exports = router;