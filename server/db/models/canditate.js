'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Canditate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stage, Comment}) {
      this.belongsTo(Stage, {foreignKey: 'stage_id'})
      this.hasMany(Comment, {foreignKey: 'candidate_id'})
    }
  }
  Canditate.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    zoom: DataTypes.STRING,
    skype: DataTypes.STRING,
    hh: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Canditate',
  });
  return Canditate;
};