'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Canditate, User}) {
     this.belongsTo(Canditate, {foreignKey: 'candidate_id'})
     this.belongsTo(User, {foreignKey: 'user_id'})
    }
  }
  Comment.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    candidate_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};