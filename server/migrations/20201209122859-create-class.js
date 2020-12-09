
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plugaId: {
        type: Sequelize.INTEGER,
        field:'pluga_id'
      },
      platoonId: {
        type: Sequelize.INTEGER,
        field:'platoon_id'
      },
      className: {
        type: Sequelize.STRING,
        field:'class_name'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Classes');
  }
};