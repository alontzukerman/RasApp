"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pluga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: "plugaId",
      });
      this.hasMany(models.Soldier, {
        foreignKey: "plugaId",
      });
    }
  }
  Pluga.init(
    {
      plugaName: {
        type: DataTypes.INTEGER,
        field: "pluga_name",
      },
      unitImage: {
        type: DataTypes.STRING,
        field: "unit_image",
      },
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
      modelName: "Pluga",
    }
  );
  return Pluga;
};
