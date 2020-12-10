"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notes",
      [
        {
          id:1,
          user_id:1,
          title:'420',
          note_content:'i need to buy ganja'
        },
        {
          id:2,
          user_id:2,
          title:'chips',
          note_content:'i need to buy food'
        },
        {
          id:3,
          user_id:1,
          title:'train',
          note_content:'i need to do exercesice'
        },
        {
          id:4,
          user_id:1,
          title:'weed',
          note_content:'i need to buy weed too like the rasap'
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  },
};
