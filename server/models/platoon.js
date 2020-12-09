
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platoon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  platoon.init({
    plugaId:{
     DataTypes:INTEGER,
     field:'pluga_id'
    },
    platoonName:{
      DataTypes:STRING,
      field:'platoon_name'
    },
  }, {
    sequelize,
    modelName: 'platoon',
  });
  return Platoon;
};