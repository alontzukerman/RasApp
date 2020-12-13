"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Ranks",
      [
        {
          id: 1,
          rank_name: "טוראי",
        },
        {
          id: 2,
          rank_name: "רב-טוראי",
        },
        {
          id: 3,
          rank_name: "סמל",
        },
        {
          id: 4,
          rank_name: "סמל-ראשון",
        },
        {
          id: 5,
          rank_name: "סגן-משנה",
        },
        {
          id: 6,
          rank_name: "סגן"
        },
        {
          id:7,
          rank_name: "רסן"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ranks', null, {});
  },
};
