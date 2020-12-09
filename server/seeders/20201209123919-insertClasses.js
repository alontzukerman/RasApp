"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Classes",
      [
        {
          id: 1,
          pluga_id:1,
          platoon_id:1,
          class_name: "א",
        },
        {
          id: 2,
          pluga_id: 1,
          platoon_id:1,
          class_name: "ב",
        },
        {
          id: 3,
          pluga_id: 1,
          platoon_id:1,
          class_name: "ג",
        },
        {
          id: 4,
          pluga_id: 1,
          platoon_id:2,
          class_name: "א",
        },
        {
          id: 5,
          pluga_id: 1,
          platoon_id:2,
          class_name: "ב",
        },
        {
          id: 6,
          pluga_id: 1,
          platoon_id:2,
          class_name: "ג"
        },
        {
          id: 7,
          pluga_id: 1,
          platoon_id:3,
          class_name: "א",
        },
        {
          id: 8,
          pluga_id: 1,
          platoon_id:3,
          class_name: "ב",
        },
        {
          id: 9,
          pluga_id: 1,
          platoon_id:3,
          class_name: "ג"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Classes', null, {});
  },
};
