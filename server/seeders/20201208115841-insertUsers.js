"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          first_name: "אלון",
          last_name: "צוקרמן",
          email: "alontzukerman@gmail.com",
          password: "123456",
          pluga_id: 1,
          //  "platoon_id":,
          //  "class_id":,
          phone_number: "053-5303521",
          birthday: "1998-07-02",
          role_id: 3,
          rank_id:3,
          draft_date: "2017-03-13",
          release_date: "2019-11-12",
          address: "מרדכי מקלף 8, מודיעין",
        },
        {
          id: 2,
          first_name: "יאיר",
          last_name: "צבר",
          email: "yairish13@gmail.com",
          password: "123456",
          pluga_id: 1,
          //  "platoon_id":,
          //  "class_id":,
          phone_number: "050-2554767",
          birthday: "1998-10-04",
          role_id: 2,
          rank_id: 5,
          draft_date: "2017-07-23",
          release_date: "2020-03-12",
          address: "אחים ישראלית 15, פתח תקווה",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
