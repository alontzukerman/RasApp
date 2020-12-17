'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipmentPerUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      })
      this.belongsTo(models.Equipment, {
        foreignKey: "equipmentId"
      })    }
  };
  EquipmentPerUser.init({
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    equipmentId: {
      type: DataTypes.INTEGER,
      field: 'equipment_id'
    },
    amount: DataTypes.INTEGER,
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
  }, {
    sequelize,
    modelName: 'EquipmentPerUser',
  });
  return EquipmentPerUser;
};