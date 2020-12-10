'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number'
    },
    birthday: DataTypes.DATEONLY,
    roleId: {
      type: DataTypes.INTEGER,
      field: 'role_id'
    },
    rankId: {
      type: DataTypes.INTEGER,
      field: 'rank_id'
    },
    draftDate: {
      type: DataTypes.DATEONLY,
      field: 'draft_date'
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      field: 'release_date'
    },
    address: DataTypes.STRING,
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
    modelName: 'User',
  });
  return User;
};