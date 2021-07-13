'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentAccessLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Student)
    }
  };
  StudentAccessLog.init({
    student_id: DataTypes.INTEGER,
    access_time: DataTypes.DATE,
    ip: DataTypes.STRING,
    browser_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentAccessLog',
    paranoid: true
  });
  return StudentAccessLog;
};
