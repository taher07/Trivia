'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Test)
    }
  };
  Group.init({
    name: DataTypes.STRING,
    students: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
    paranoid: true
  });
  return Group;
};
