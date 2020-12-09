"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CertificationPerSoldiers",
      [
        {
          id: 1,
          certification_id: 1,
          soldier_id: 1,
        },
        {
          id: 2,
          certification_id: 2,
          soldier_id: 2,
        },
        {
          id: 3,
          certification_id: 3,
          soldier_id: 3,
        },
        {
          id: 4,
          certification_id: 4,
          soldier_id: 4,
        },
        {
          id: 5,
          certification_id: 5,
          soldier_id: 5,
        },
        {
          id: 6,
          certification_id: 6,
          soldier_id: 6,
        },
        {
          id: 7,
          certification_id: 7,
          soldier_id: 7,
        },
        {
          id: 8,
          certification_id: 8,
          soldier_id: 8,
        },
        {
          id: 9,
          certification_id: 9,
          soldier_id: 9,
        },
        {
          id: 10,
          certification_id: 10,
          soldier_id: 10,
        },
        {
          id: 11,
          certification_id: 11,
          soldier_id: 11,
        },
        {
          id: 12,
          certification_id: 12,
          soldier_id: 12,
        },
        {
          id: 13,
          certification_id: 13,
          soldier_id: 13,
        },
        {
          id: 14,
          certification_id: 14,
          soldier_id: 14,
        },
        {
          id: 15,
          certification_id: 15,
          soldier_id: 15,
        },
        {
          id: 16,
          certification_id: 16,
          soldier_id: 16,
        },
        {
          id: 17,
          certification_id: 17,
          soldier_id: 17,
        },
        {
          id: 18,
          certification_id: 18,
          soldier_id: 18,
        },
        {
          id: 19,
          certification_id: 19,
          soldier_id: 19,
        },
        {
          id: 20,
          certification_id: 20,
          soldier_id: 20,
        },
        {
          id: 21,
          certification_id: 21,
          soldier_id: 21,
        },
        {
          id: 22,
          certification_id: 22,
          soldier_id: 22,
        },
        {
          id: 23,
          certification_id: 23,
          soldier_id: 23,
        },
        {
          id: 24,
          certification_id: 24,
          soldier_id: 24,
        },
        {
          id: 25,
          certification_id: 25,
          soldier_id: 25,
        },
        {
          id: 26,
          certification_id: 26,
          soldier_id: 26,
        },
        {
          id: 27,
          certification_id: 11,
          soldier_id: 27,
        },
        {
          id: 28,
          certification_id: 11,
          soldier_id: 1,
        },
        {
          id: 29,
          certification_id: 24,
          soldier_id: 2,
        },
        
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CertificationPerSoldiers", null, {});
  },
};
