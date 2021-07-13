'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Question)
    }
  };
  QuestionTag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuestionTag',
    paranoid: true
  });
  return QuestionTag;
};