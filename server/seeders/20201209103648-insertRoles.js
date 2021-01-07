"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: 1,
          role_name: "מפקד פלוגה",
          role_short: 'מ"פ',
        },
        {
          id: 2,
          role_name: "סגן מפקד פלוגה",
          role_short: 'סמ"פ',
        },
        {
          id: 3,
          role_name: "רב סמל פלוגתי",
          role_short: 'רס"פ',
        },
        {
          id: 4,
          role_name: "סגן רב סמל פלוגתי",
          role_short: 'סרס"פ',
        },
        {
          id: 5,
          role_name: "מפקד מחלקה",
          role_short: 'מ"מ',
        },
        {
          id: 6,
          role_name: "סמל מחלקה",
          role_short: "סמל",
        },
        {
          id: 7,
          role_name: "מפקד כיתה",
          role_short: 'מ"כ',
        },
        {
          id: 8,
          role_name: "משק הדרכה",
          role_short: 'משה"ד',
        },
        {
          id: 9,
          role_name: "חובש פלוגתי",
          role_short: 'חופ"ל'
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
