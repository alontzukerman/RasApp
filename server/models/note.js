"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Note.init(
    {
      userId: { type: DataTypes.INTEGER, field: "user_id" },
      title: { type: DataTypes.STRING },
      noteContent: { type: DataTypes.STRING, field: "note_content" },
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
      modelName: "Note",
    }
  );
  return Note;
};
