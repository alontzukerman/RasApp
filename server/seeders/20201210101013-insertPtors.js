'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Ptors",
      [
        {
          id: 1,
          ptor_name: "זקן",
        },
        {
          id: 2,
          ptor_name: "משקל",
        },
        {
          id: 3,
          ptor_name: "ריצה",
        },
        {
          id: 4,
          ptor_name: "שמירה",
        },
        {
          id: 5,
          ptor_name:`צה"ל`
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ptors', null, {});
  }
};
