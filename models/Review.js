const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
     id: {
      type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
    movie_id: {
      type: DataTypes.STRING,
       allowNull: false,
     },

     fun_review_integer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    quality_review_integer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
     },
     
    review_string: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     date_created: {
       type: DataTypes.DATE,
       allowNull: false,
       defaultValue: DataTypes.NOW,
     },
    user_id: {
     type: DataTypes.INTEGER,
    references: {
        model: 'user',
        key: 'id',
      },
   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
