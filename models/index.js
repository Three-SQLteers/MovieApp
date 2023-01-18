const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');


// User.hasMany(Review, {
//   foreignKey: 'review_id',
//   onDelete: 'CASCADE'
//  });

//  Review.belongsTo(Movie, {
//    foreignKey: 'movie_id'
//  })

//  Movie.hasMany(Review, {
//    foreignKey: 'movie_id'
//  })

//  Movie.belongsToMany(User, {
//    foreignKey: 'user_id'
//  })

 module.exports = { User, Movie, Review };
