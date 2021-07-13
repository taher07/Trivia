'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Student)
      this.hasOne(models.Test)
    }
  };
  StudentResult.init({
    student_id: DataTypes.INTEGER,
    test_id: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentResult',
    paranoid: true
  });
  return StudentResult;
};
