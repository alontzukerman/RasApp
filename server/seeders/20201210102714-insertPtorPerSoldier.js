'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PtorPerSoldiers', [
      {
        id:1,
        soldier_id:3,
        user_id: 2,
        ptor_id: 1,
        start_date: '2020-10-10',
        given_days:120
      },
      {
        id:2,
        soldier_id:9,
        user_id: 1,
        ptor_id: 3,
        start_date: '2020-10-11',
        given_days:10
      },
      {
        id:3,
        soldier_id:11,
        user_id: 2,
        ptor_id: 1,
        start_date: '2020-10-12',
        given_days:120
      },
      {
        id:4,
        soldier_id:15,
        user_id: 1,
        ptor_id: 1,
        start_date: '2020-10-10',
        given_days:120
      },
      {
        id:5,
        soldier_id:1,
        user_id: 2,
        ptor_id: 1,
        start_date: '2020-10-10',
        given_days:120
      },
      {
        id:6,
        soldier_id:19,
        user_id: 1,
        ptor_id: 4,
        start_date: '2020-10-10',
        given_days:14
      },
      {
        id:7,
        soldier_id:10,
        user_id: 2,
        ptor_id: 1,
        start_date: '2020-10-10',
        given_days:120
      },
      {
        id:8,
        soldier_id:25,
        user_id: 1,
        ptor_id: 1,
        start_date: '2020-10-10',
        given_days:120
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PtorPerSoldiers', null, {});
  }
};
