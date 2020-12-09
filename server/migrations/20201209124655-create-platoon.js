'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Platoons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plugaId: {
        type: Sequelize.INTEGER,
        field: 'pluga_id'
      },
      platoonName: {
        type: Sequelize.STRING,
        field:'platoon_name'
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
    await queryInterface.dropTable('Platoons');
  }
};