"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Missing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Missing.init(
    {
      missingName: {
        type: DataTypes.STRING,
        field: "missing_name",
      },
    },
    {
      sequelize,
      modelName: "Missing",
      timestamps: false,
    }
  );
  return Missing;
};
