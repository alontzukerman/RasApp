'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PtorPerSoldiers', {
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
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id'
      },
      ptorId: {
        type: Sequelize.INTEGER,
        field: 'ptor_id'
      },
      startDate: {
        type: Sequelize.DATE,
        field: 'start_date'
      },
      givenDays: {
        type: Sequelize.INTEGER,
        field: 'given_days'
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
    await queryInterface.dropTable('PtorPerSoldiers');
  }
};