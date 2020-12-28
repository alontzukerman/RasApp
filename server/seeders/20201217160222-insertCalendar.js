"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Calendars", [
      {
        id: 1,
        subject: "פורום מוביל",
        start_time: new Date(2020,11,16,12,0),
        end_time: new Date(2020,11,16,14,0),
        user_id: 2,
        pluga_id: 1,
      },
      {
        id: 2,
        subject: "לתת שבת לכל המפקדים",
        start_time: new Date(2020,11,18,17,0),
        end_time: new Date(2020,11,18,18,0),
        user_id: 1,
        pluga_id: 1,
      },
      {
        id: 3,
        subject: "מטווח",
        start_time: new Date(2020,11,19,12,0),
        end_time: new Date(2020,11,19,17,0),
        user_id: 2,
        pluga_id:1
      },
      {
        id: 4,
        subject: "משחק טניס",
        start_time: new Date(2020,11,29,12,0),
        end_time: new Date(2020,11,29,17,0),
        user_id: 3,
        pluga_id:1
      },
      {
        id: 5,
        subject: "ישיבה עם צבר",
        start_time: new Date(2020,11,30,12,0),
        end_time: new Date(2020,11,30,17,0),
        user_id: 6,
        pluga_id:1
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Calendars', null, {});
  },
};
