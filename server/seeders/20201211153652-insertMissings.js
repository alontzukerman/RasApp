'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Missings",
      [
        {
          id: 1,
          missing_name: "נוכח",
        },
        {
          id: 2,
          missing_name: "חופש",
        },
        {
          id: 3,
          missing_name: "מחלה",
        },
        {
          id: 4,
          missing_name: "נפקד",
        },
        {
          id: 5,
          missing_name: "עריק",
        },
        {
          id: 6,
          missing_name:"משימה מחוץ ליחידה"
        },
        {
          id: 7,
          missing_name:"רמ 2"
        },
        {
          id: 8,
          missing_name:"רמ ד"
        },
        {
          id: 9,
          missing_name:"מיוחדת"
        },
        {
          id: 10,
          missing_name:"הפניה"
        },
        {
          id: 11,
          missing_name:"יום מפקד"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Missings', null, {});
  }
};
