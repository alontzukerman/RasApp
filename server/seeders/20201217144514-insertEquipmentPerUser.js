"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "EquipmentPerUsers",
      [
        {
          id: 1,
          user_id: 1,
          equipment_id: 2,
          amount: 1,
        },
        {
          id: 2,
          user_id: 1,
          equipment_id: 3,
          amount: 2,
        },
        {
          id: 3,
          user_id: 1,
          equipment_id: 1,
          amount: 3,
        },
        {
          id: 4,
          user_id: 1,
          equipment_id: 6,
          amount: 1,
        },
        {
          id: 5,
          user_id: 2,
          equipment_id: 2,
          amount: 2,
        },
        {
          id: 6,
          user_id: 2,
          equipment_id: 4,
          amount: 3,
        },
        {
          id: 7,
          user_id: 2,
          equipment_id: 3,
          amount: 1,
        },
        {
          id: 8,
          user_id: 2,
          equipment_id: 5,
          amount: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("EquipmentPerUsers", null, {});
  },
};
