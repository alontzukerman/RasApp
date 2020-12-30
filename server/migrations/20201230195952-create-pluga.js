'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Plugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plugaName: {
        type: Sequelize.STRING,
        field:'pluga_name'
      },
      unitImage: {
        type: Sequelize.STRING,
        field:'unit_image'
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: new Date
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: new Date
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Plugas');
  }
};