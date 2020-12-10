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
        foreignKey: "id",
      });
      // this.belongsTo(models.Certification, {
      //   foreignKey: "certificationId",
      // });
    }
  }
  CertificationPerSoldier.init(
    {
      certificationId: {
        type: DataTypes.INTEGER,
        field: "certification_id",
      },
      soldierId: {
        type: DataTypes.INTEGER,
        field: "soldier_id",
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
    },
    {
      sequelize,
      modelName: "CertificationPerSoldier",
    }
  );
  return CertificationPerSoldier;
};
