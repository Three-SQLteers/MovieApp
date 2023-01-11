const User = require('./User');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsToMany(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Review };
