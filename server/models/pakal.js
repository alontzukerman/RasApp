'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pakal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Soldier,{
        foreignKey:'pakalId'
      })
    }
  };
  Pakal.init({
    pakalName:{
      type: DataTypes.STRING,
      field:'pakal_name'
    }
  }, {
    sequelize,
    modelName: 'Pakal',
    timestamps:false,
  });
  return Pakal;
};