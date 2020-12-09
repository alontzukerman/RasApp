"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CertificationPerSoldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Soldier, {
        foreignKey: "soldierId",
      });
      this.belongsTo(models.Certification, {
        foreignKey: "certificationId",
      });
    }
  }
  CertificationPerSoldier.init(
    {
      certificationId: {
        DataTypes: INTEGER,
        field: "certification_id",
      },
      soldierId: {
        DataTypes: INTEGER,
        field: "soldier_id",
      },
    },
    {
      sequelize,
      modelName: "CertificationPerSoldier",
    }
  );
  return CertificationPerSoldier;
};
