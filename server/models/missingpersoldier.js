"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MissingPerSoldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MissingPerSoldier.init(
    {
      soldierId: { type: DataTypes.INTEGER, field: "soldier_id" },
      missingId: { type: DataTypes.INTEGER, field: "missing_id" },
      date: DataTypes.DATEONLY,
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
    },
    {
      sequelize,
      modelName: "MissingPerSoldier",
    }
  );
  return MissingPerSoldier;
};
