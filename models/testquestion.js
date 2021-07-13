'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.StudentTest)
      this.hasOne(models.Question)
      this.hasOne(models.Test)
    }
  };
  TestQuestion.init({
    question_id: DataTypes.INTEGER,
    test_id: DataTypes.INTEGER,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TestQuestion',
    paranoid: true
  });
  return TestQuestion;
};
