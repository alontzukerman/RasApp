'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE,
        field:'start_time'
      },
      endTime: {
        type: Sequelize.DATE,
        field:'end_time'
      },
      userId: {
        type: Sequelize.INTEGER,
        field:'user_id'
      },
      plugaId: {
        type: Sequelize.INTEGER,
        field:'pluga_id'
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
    await queryInterface.dropTable('Calendars');
  }
};