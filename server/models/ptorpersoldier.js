"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PtorPerSoldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Soldier,{
        foreignKey:'soldierId'
      })
      this.belongsTo(models.User,{
        foreignKey:'userId'
      })
      this.belongsTo(models.Ptor,{
        foreignKey:'ptorId'
      })
    }
  }
  PtorPerSoldier.init(
    {
      soldierId: { type: DataTypes.INTEGER, field: "soldier_id" },
      userId: { type: DataTypes.INTEGER, field: "user_id" },
      ptorId: { type: DataTypes.INTEGER, field: "ptor_id" },
      startDate: { type: DataTypes.DATE, field: "start_date" },
      givenDays: { type: DataTypes.INTEGER, field: "given_days" },
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
      modelName: "PtorPerSoldier",
    }
  );
  return PtorPerSoldier;
};
