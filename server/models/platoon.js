
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
      this.hasMany(models.User,{
        foreignKey:'platoonId'
      })
      this.hasMany(models.Soldier,{
        foreignKey:'platoonId'
      })
    }
  };
  Platoon.init({
    plugaId:{
     type: DataTypes.INTEGER,
     field:'pluga_id'
    },
    platoonName:{
      type: DataTypes.STRING,
      field:'platoon_name'
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
      defaultValue: Date.now()
    }
  }, {
    sequelize,
    modelName: 'Platoon',
  });
  return Platoon;
};