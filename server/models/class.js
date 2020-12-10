
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Soldier, {
        foreignKey: "classId",
      })
      this.hasMany(models.User, {
        foreignKey: "classId",
      });
    }
  };
  Class.init({
    plugaId:{
     type: DataTypes.INTEGER,
     field:'pluga_id'
    },
    platoonId:{
      type: DataTypes.INTEGER,
      field:'platoon_id'
    },
    className:{
      type: DataTypes.STRING,
      field:'class_name'
    } ,
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
    modelName: 'Class',
  });
  return Class;
};