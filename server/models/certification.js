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
      // this.hasMany(models.Songs,
      //   {
      //     foreignKey:"albumId",
      //   });
      // this.belongsTo(models.Artists,
      //   {
      //     foreignKey:"artistId",
      //   }); 
      //    }    
        }
  };
  Certification.init({
    certificationName:{
      DataTypes:STRING,
      field:'certification_name'
    },
  }, {
    sequelize,
    modelName: 'Certification',
  });
  return Certification;
};