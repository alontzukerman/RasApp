'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Soldiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        field: 'phone_number'
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      address: {
        type: Sequelize.STRING
      },
      plugaId: {
        type: Sequelize.INTEGER,
        field: 'pluga_id'
      },
      platoonId: {
        type: Sequelize.INTEGER,
        field: 'platoon_id'
      },
      classId: {
        type: Sequelize.INTEGER,
        field: 'class_id'
      },
      rankId: {
        type: Sequelize.INTEGER,
        field: 'rank_id'
      },
      roleId: {
        type: Sequelize.INTEGER,
        field: 'role_id'
      },
      draftDate: {
        type: Sequelize.DATEONLY,
        field: 'draft_date'
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        field: 'release_date'
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Soldiers');
  }
};