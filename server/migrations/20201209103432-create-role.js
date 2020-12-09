'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleName: {
        type: Sequelize.STRING,
        field:'role_name'
      },
      roleShort:{
        type: Sequelize.STRING,
        field:'role_short'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field:'created_at',
        defaultValue: new Date
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field:'updated_at',
        defaultValue: new Date
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Roles');
  }
};