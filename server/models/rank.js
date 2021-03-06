'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User,{
        foreignKey:'rankId'
      })
      this.hasMany(models.Soldier,{
        foreignKey:'rankId'
      })
    }
  };
  Rank.init(
  {
    rankName:{
      type: DataTypes.STRING,
      field:'rank_name'
    }
  }, {
    sequelize,
    modelName: 'Rank',
    timestamps:false,
  });
  return Rank;
};