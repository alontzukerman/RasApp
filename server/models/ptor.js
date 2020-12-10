"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ptor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PtorPerSoldier, {
        foreignKey: "ptorId",
      });
    }
  }
  Ptor.init(
    {
      ptorName: {
        type: DataTypes.STRING,
        field: "ptor_name",
      },
    },
    {
      sequelize,
      modelName: "Ptor",
      timestamps: false,
    }
  );
  return Ptor;
};
