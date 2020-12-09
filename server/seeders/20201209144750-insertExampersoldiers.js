'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CertificationPerSoldiers",
      [
        {
          id: 1,
          soldier_id: 1,
          exam_id: 1,
          mark:"11:36"
        },
        {
          id: 2,
          soldier_id: 2,
          exam_id: 2,
          mark:"21"
        },
        {
          id: 3,
          soldier_id: 3,
          exam_id: 3,
          mark:"17:56"
        },
        {
          id: 4,
          soldier_id: 4,
          exam_id: 4,
          mark:"34"
        },
        {
          id: 5,
          soldier_id: 5,
          exam_id: 1,
          mark:"12:33"
        },
        {
          id: 6,
          soldier_id: 6,
          exam_id: 2,
          mark:"19"
        },
        {
          id: 7,
          soldier_id: 7,
          exam_id: 3,
          mark:"16:36"
        },
        {
          id: 8,
          soldier_id: 8,
          exam_id: 4,
          mark:"12"
        },
        {
          id: 9,
          soldier_id: 9,
          exam_id: 1,
          mark:"11:52"
        },
        {
          id: 10,
          soldier_id: 10,
          exam_id: 2,
          mark:"14"
        },
        {
          id: 11,
          soldier_id: 11,
          exam_id: 3,
          mark:"17:21"
        },
        {
          id: 12,
          soldier_id: 12,
          exam_id: 4,
          mark:"20"
        },
        {
          id: 13,
          soldier_id: 13,
          exam_id: 1,
          mark:"11:36"
        },
        {
          id: 14,
          soldier_id: 14,
          exam_id: 2,
          mark:"11:36"
        },
        {
          id: 15,
          soldier_id: 15,
          exam_id: 3,
          mark:"11:36"
        },
        {
          id: 16,
          soldier_id: 16,
          exam_id: 4,
          mark:"11:36"
        },
        {
          id: 17,
          soldier_id: 17,
          exam_id: 6,
          mark:"11:36"
        },
        {
          id: 18,
          soldier_id: 18,
          exam_id: 5,
          mark:"11:36"
        },
        {
          id: 19,
          soldier_id: 19,
          exam_id: 1,
          mark:"11:36"
        },
        {
          id: 20,
          soldier_id: 20,
          exam_id: 6,
          mark:"11:36"
        },
        {
          id: 21,
          soldier_id: 21,
          exam_id: 5,
          mark:"11:36"
        },
        {
          id: 22,
          soldier_id: 22,
          exam_id: 6,
          mark:"11:36"
        },
        {
          id: 23,
          soldier_id: 23,
          exam_id: 5,
          mark:"11:36"
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
