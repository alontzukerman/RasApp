'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Soldier.init({
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    email: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number'
    },
    birthday: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    plugaId: {
      type: DataTypes.INTEGER,
      field: 'pluga_id'
    },
    platoonId: {
      type: DataTypes.INTEGER,
      field: 'platoon_id'
    },
    classId: {
      type: DataTypes.INTEGER,
      field: 'class_id'
    },
    rankId: {
      type: DataTypes.INTEGER,
      field: 'rank_id'
    },
    roleId: {
      type: DataTypes.INTEGER,
      field: 'role_id'
    },
    draftDate: {
      type: DataTypes.DATEONLY,
      field: 'draft_date'
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      field: 'release_date'
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
  }, {
    sequelize,
    modelName: 'Soldier',
  });
  return Soldier;
};