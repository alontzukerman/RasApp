"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Calendar.init(
    {
      subject: {
        type: DataTypes.STRING,
      },
      startTime: {
        type: DataTypes.DATE,
        field: "start_time",
      },
      endTime: {
        type: DataTypes.DATE,
        field: "end_time",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
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
      modelName: "Calendar",
    }
  );
  return Calendar;
};
