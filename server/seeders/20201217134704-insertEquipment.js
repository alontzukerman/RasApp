"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Equipment",
      [
        {
          id: 1,
          equipment_name: "צלנית",
        },
        {
          id: 2,
          equipment_name: "מוט אסום",
        },
        {
          id: 3,
          equipment_name: "פרופלור",
        },
        {
          id: 4,
          equipment_name: "מיטה צרפתית",
        },
        {
          id: 5,
          equipment_name: "מזרון",
        },
        {
          id: 6,
          equipment_name: "תרמוקן",
        },
        {
          id: 7,
          equipment_name: "תרמופוט",
        },
        {
          id: 8,
          equipment_name: "חופית",
        },
        {
          id: 9,
          equipment_name: "ספסל קצר",
        },
        {
          id: 10,
          equipment_name: "ספסל ארוך",
        },
        {
          id: 11,
          equipment_name: "שולחן פלטה",
        },
        {
          id: 12,
          equipment_name: "שולחן רגליים",
        },
        {
          id: 13,
          equipment_name: "אוהל 12",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Equipment", null, {});
  },
};
