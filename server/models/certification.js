'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CertificationPerSoldier, {
        foreignKey: "certificationId",
      });
        }
  };
  Certification.init({
    certificationName:{
      type: DataTypes.STRING,
      field:'certification_name'
    }
  }, {
    sequelize,
    modelName: 'Certification',
    timestamps:false,
  });
  return Certification;
};