'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamPerSoldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ExamPerSoldier.init({
    soldierId: {
      type:DataTypes.INTEGER,
      field: 'soldier_id'
    },
    examId: {
      type: DataTypes.INTEGER,
      field: 'exam_id'
    },
    mark: DataTypes.STRING,
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
    modelName: 'ExamPerSoldier',
  });
  return ExamPerSoldier;
};