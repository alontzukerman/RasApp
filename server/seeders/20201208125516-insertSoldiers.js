'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Soldiers', [
      {
        "id":8900000,
        "first_name":"רועי",
        "last_name":"כפרי",
        // "email":"",
        "phone_number":"055-0550055",
        "birthday":"2001-01-01",
        "address":"ראשון לציון",
        "pluga_id":1,
        "platoon_id":1,
        "class_id":1,
        "rank_id":1,
        "role_id":1,
        "draft_date":"2020-03-10",
        "release_date":"2022-09-09"
    },
    {
        "id":8900001,
        "first_name":"יוסי",
        "last_name":"כהן",
        // "email":"",
        "phone_number":"054-4400444",
        "birthday":"2001-02-02",
        "address":"נתניה",
        "pluga_id":1,
        "platoon_id":1,
        "class_id":2,
        "rank_id":1,
        "role_id":2,
        "draft_date":"2020-03-10",
        "release_date":"2022-09-09"
    },
    {
      "id":8904000,
      "first_name":"משה",
      "last_name":"נחום",
      // "email":"",
      "phone_number":"052-2338791",
      "birthday":"2001-05-01",
      "address":"ירושלים",
      "pluga_id":1,
      "platoon_id":2,
      "class_id":1,
      "rank_id":1,
      "role_id":1,
      "draft_date":"2020-03-10",
      "release_date":"2022-09-09"
    },
    {
      "id":8900191,
      "first_name":"אביאל",
      "last_name":"לוי",
      // "email":"",
      "phone_number":"050-3929383",
      "birthday":"2001-04-09",
      "address":"טבריה",
      "pluga_id":1,
      "platoon_id":2,
      "class_id":2,
      "rank_id":2,
      "role_id":3,
      "draft_date":"2020-01-10",
      "release_date":"2022-07-09"
    }
  ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Soldiers', null, {});
  }
};
