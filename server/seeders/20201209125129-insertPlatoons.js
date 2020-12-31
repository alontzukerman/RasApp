"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Platoons",
      [
        {
          id: 1,
          pluga_id:1,
          platoon_name: "1",
        },
        {
          id: 2,
          pluga_id: 1,
          platoon_name: "2",
        },
        {
          id: 3,
          pluga_id: 1,
          platoon_name: "3",
        },
      {
        id:4,
        pluga_id: 2,
        platoon_name:'1'
      }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Platoons', null, {});
  },
};
