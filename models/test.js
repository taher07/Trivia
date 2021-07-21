'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Group)
      this.belongsTo(models.StudentResult)
      this.belongsTo(models.StudentTest)
      this.belongsTo(models.TestQuestion)
    }
  };
  Tests.init({
    name: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    date_of_test: DataTypes.DATE,
    total: DataTypes.INTEGER,
    questions_count: DataTypes.INTEGER,
    pass_points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Test',
    paranoid: true
  });
  return Test;
};
