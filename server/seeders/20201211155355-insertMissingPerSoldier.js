'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MissingPerSoldiers', [
      {
        id:1,
        soldier_id:1,
        missing_id: 2,
        date: '2020-12-11',
      },
      {
        id:2,
        soldier_id:2,
        missing_id: 3,
        date: '2020-12-11',      },
      {
        id:3,
        soldier_id:3,
        missing_id: 1,
        date: '2020-12-11',
      },
      {
        id:4,
        soldier_id:4,
        missing_id: 6,
        date: '2020-12-11',
      },
      {
        id:5,
        soldier_id:5,
        missing_id: 2,
        date: '2020-12-11',
      },
      {
        id:6,
        soldier_id:6,
        missing_id: 4,
        date: '2020-12-11',      },
      {
        id:7,
        soldier_id:7,
        missing_id: 3,
        date: '2020-12-11',
      },
      {
        id:8,
        soldier_id:8,
        missing_id: 4,
        date: '2020-12-11',
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MissingPerSoldiers', null, {});
  }
};
