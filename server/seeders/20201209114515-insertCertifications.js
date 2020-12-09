"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Certifications",
      [
        {
          id: 1,
          certification_name: "נהג נמר",
        },
        {
          id: 2,
          certification_name: "נהג פומה",
        },
        {
          id: 3,
          certification_name: "קטלן",
        },
        {
          id: 4,
          certification_name: "מפקד",
        },
        {
          id: 5,
          certification_name: "מפקד נסיעה",
        },
        {
          id: 6,
          certification_name: "מקלר"
        },
        {
          id: 7,
          certification_name: "מקלרון"
        },
        {
          id: 8,
          certification_name: "חבלה"
        },
        {
          id: 9,
          certification_name: "לוטר"
        },
        {
          id: 10,
          certification_name: "גיל"
        },
        {
          id: 11,
          certification_name: "קלע"
        },
        {
          id: 12,
          certification_name: "נגב"
        },
        {
          id: 13,
          certification_name: "מאג"
        },
        {
          id: 14,
          certification_name: "מפקד חוליה"
        },
        {
          id: 15,
          certification_name: "לאו"
        },
        {
          id: 16,
          certification_name: "קשר"
        },
        {
          id: 17,
          certification_name: "מדאגנעת"
        },
        {
          id: 18,
          certification_name: "חובש"
        },
        {
          id: 19,
          certification_name: "נהג סוואנה"
        },
        {
          id: 20,
          certification_name: "צלף"
        },
        {
          id: 21,
          certification_name: "רינגו"
        },
        {
          id: 22,
          certification_name: "מקכ"
        },
        {
          id: 23,
          certification_name: "מתשאל"
        },
        {
          id: 24,
          certification_name: "נווט"
        },
        {
          id: 25,
          certification_name: "משואה"
        },
        {
          id: 26,
          certification_name: "מרגמה"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Certifications', null, {});
  },
};
