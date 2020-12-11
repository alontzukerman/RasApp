'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MissingPerSoldiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soldierId: {
        type: Sequelize.INTEGER,
        field: 'soldier_id'
      },
      missingId: {
        type: Sequelize.INTEGER,
        field: 'missing_id'
      },
      date: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('MissingPerSoldiers');
  }
};