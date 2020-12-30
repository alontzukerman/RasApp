"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Soldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CertificationPerSoldier, {
        foreignKey: "soldierId",
      });
      this.hasMany(models.PtorPerSoldier, {
        foreignKey: "soldierId"
      });
      this.hasMany(models.ExamPerSoldier, {
        foreignKey: "soldierId",
      });
      this.belongsTo(models.Platoon, {
        foreignKey: "platoonId",
      });
      this.belongsTo(models.Class, {
        foreignKey: "classId",
      });
      this.belongsTo(models.Pakal, {
        foreignKey: "pakalId",
      });
      this.belongsTo(models.Pluga, {
        foreignKey: "plugaId",
      });
      this.belongsTo(models.Rank, {
        foreignKey: "rankId",
      });
    }
  }
  Soldier.init(
    {
      firstName: {
        type: DataTypes.STRING,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      email: DataTypes.STRING,
      phoneNumber: {
        type: DataTypes.STRING,
        field: "phone_number",
      },
      birthday: DataTypes.DATEONLY,
      address: DataTypes.STRING,
      plugaId: {
        type: DataTypes.INTEGER,
        field: "pluga_id",
      },
      platoonId: {
        type: DataTypes.INTEGER,
        field: "platoon_id",
      },
      classId: {
        type: DataTypes.INTEGER,
        field: "class_id",
      },
      rankId: {
        type: DataTypes.INTEGER,
        field: "rank_id",
      },
      pakalId: {
        type: DataTypes.INTEGER,
        field: "pakal_id",
      },
      draftDate: {
        type: DataTypes.DATEONLY,
        field: "draft_date",
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        field: "release_date",
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
      modelName: "Soldier",
    }
  );
  return Soldier;
};
