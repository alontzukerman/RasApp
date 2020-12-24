"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notes",
      [
        {
          id:1,
          user_id:1,
          title:'מסדר',
          note_content:'לתאם מסדר עם הרסר'
        },
        {
          id:2,
          user_id:2,
          title:'שטח אש',
          note_content:'לחתום על שטח אש לאימון'
        },
        {
          id:3,
          user_id:1,
          title:'יעד',
          note_content:'שכל החיילים ירוצו 10 קילומטר'
        },
        {
          id:4,
          user_id:1,
          title:'מנקים',
          note_content:'למשוך 50 מנקים לשבוע הבא'
        },
        {
          id:5,
          user_id:2,
          title:'אמן',
          note_content:'לא לשכוח להניח תפילין'
        },
        {
          id:6,
          user_id:3,
          title:'אליפות',
          note_content:'להוסיף עוד אליפות'
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  },
};
