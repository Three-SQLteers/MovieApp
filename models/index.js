const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');



  Review.belongsTo(User, {
    foreignKey: 'user_id'
  })


 module.exports = { User, Movie, Review };
