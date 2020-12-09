"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Exams",
      [
        {
          id: 1,
          exam_name: "בראור",
        },
        {
          id: 2,
          exam_name: "מתח",
        },
        {
          id: 3,
          exam_name: "ספרינטים",
        },
        {
          id: 4,
          exam_name: "מקבילים",
        },
        {
          id: 5,
          exam_name: "דחיקות חזה",
        },
        {
          id: 6,
          exam_name: "מתח(משקל)"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Exams', null, {});
  },
};
