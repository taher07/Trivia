'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Tests)
      this.hasOne(models.TestQuestion)
      this.hasOne(models.Student)
    }
  };
  StudentTest.init({
    test_id: DataTypes.INTEGER,
    test_question_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    is_correct: DataTypes.BOOLEAN,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentTest',
    paranoid: true
  });
  return StudentTest;
};
