"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Pakals",
      [
        {
          id: 1,
          pakal_name: "קלע",
        },
        {
          id: 2,
          pakal_name: "נגב",
        },
        {
          id: 3,
          pakal_name: "מאג",
        },
        {
          id: 4,
          pakal_name: "נהג",
        },
        {
          id: 5,
          pakal_name: "מפקד חוליה",
        },
        {
          id: 6,
          pakal_name: "לאו"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pakals', null, {});
  },
};
