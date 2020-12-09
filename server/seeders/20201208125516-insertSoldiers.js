"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Soldiers",
      [
        {
          id: 8900000,
          first_name: "רועי",
          last_name: "כפרי",
          // "email":"",
          phone_number: "055-0550055",
          birthday: "2001-01-01",
          address: "ראשון לציון",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 1,
          rank_id: 1,
          // "pakal_id":1,
          draft_date: "2020-03-10",
          release_date: "2022-09-09",
        },
        {
          id: 8900001,
          first_name: "יוסי",
          last_name: "כהן",
          // "email":"",
          phone_number: "054-4400444",
          birthday: "2001-02-02",
          address: "נתניה",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 1,
          rank_id: 1,
          pakal_id: 2,
          draft_date: "2020-03-10",
          release_date: "2022-09-09",
        },
        {
          id: 8900002,
          first_name: "משה",
          last_name: "נחום",
          // "email":"",
          phone_number: "052-2338791",
          birthday: "2001-05-01",
          address: "ירושלים",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 1,
          rank_id: 1,
          // "pakal_id":1,
          draft_date: "2020-03-10",
          release_date: "2022-09-09",
        },
        {
          id: 8900003,
          first_name: "אביאל",
          last_name: "לוי",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "טבריה",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 2,
          rank_id: 2,
          pakal_id: 3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900004,
          first_name: "שחר",
          last_name: "אליהו",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "מודיעין",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 2,
          rank_id: 2,
          pakal_id: 3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900005,
          first_name: "איתי",
          last_name: "ששון",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "פתח תקווה",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 2,
          rank_id: 1,
          pakal_id: 2,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900006,
          first_name: "ערן",
          last_name: "דהן",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "ירושלים",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 3,
          rank_id: 1,
          pakal_id: 4,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900007,
          first_name: "ליעם",
          last_name: "קלס",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "רחובות",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 3,
          rank_id: 2,
          pakal_id: 6,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900008,
          first_name: "גלעד",
          last_name: "יבנה",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "תל אביב",
          pluga_id: 1,
          platoon_id: 1,
          class_id: 3,
          rank_id: 1,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900009,
          first_name: "גל",
          last_name: "מושקוביץ",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "חולון",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 4,
          rank_id: 1,
          pakal_id: 6,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900010,
          first_name: "זך",
          last_name: "ב'זה",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "מודיעין",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 4,
          rank_id: 1,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900011,
          first_name: "צח",
          last_name: "עובדיה",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "הוד השרון",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 4,
          rank_id: 1,
          pakal_id: 3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900012,
          first_name: "טל",
          last_name: "פיבן",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "נס ציונה",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 5,
          rank_id: 1,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900013,
          first_name: "אורי",
          last_name: "שש",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "נתניה",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 5,
          rank_id: 1,
          pakal_id: 3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900014,
          first_name: "איתי",
          last_name: "ברנד",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "רעננה",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 5,
          rank_id: 1,
          pakal_id: 5,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900015,
          first_name: "יוני",
          last_name: "גולדברג",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "מודיעין",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 6,
          rank_id: 1,
          pakal_id: 4,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900016,
          first_name: "עמרי",
          last_name: "זילברשטיין",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "שדה ורבורג",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 6,
          rank_id: 1,
          pakal_id: 1,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900017,
          first_name: "ניר",
          last_name: "כהנה",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "בית גמליאל",
          pluga_id: 1,
          platoon_id: 2,
          class_id: 6,
          rank_id: 2,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900018,
          first_name: "ניר",
          last_name: "כהנה",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "בית גמליאל",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 7,
          rank_id: 2,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900019,
          first_name: "ירון",
          last_name: "יטבת",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "אשדוד",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 7,
          rank_id: 2,
          pakal_id: 1,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900020,
          first_name: "דוד",
          last_name: "דיהמנד",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "סביון",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 7,
          rank_id: 2,
          pakal_id: 5,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900021,
          first_name: "מיכאל",
          last_name: "בלנסקי",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "אשקלון",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 8,
          rank_id: 2,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900022,
          first_name: "רועי",
          last_name: "כרמלי",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "חיפה",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 8,
          rank_id: 1,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900023,
          first_name: "רועי",
          last_name: "דאמרי",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "כפר-סבא",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 8,
          rank_id: 2,
          pakal_id: 1,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900024,
          first_name: "תומר",
          last_name: "בבילה",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "הרצליה",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 9,
          rank_id: 2,
          // "pakal_id":3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900025,
          first_name: "רועי",
          last_name: "שנייצר",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "פתח-תקווה",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 9,
          rank_id: 2,
          pakal_id: 3,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
        {
          id: 8900026,
          first_name: "אלון",
          last_name: "ברוק",
          // "email":"",
          phone_number: "050-3929383",
          birthday: "2001-04-09",
          address: "לכיש",
          pluga_id: 1,
          platoon_id: 3,
          class_id: 9,
          rank_id: 2,
          pakal_id: 2,
          draft_date: "2020-01-10",
          release_date: "2022-07-09",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Soldiers", null, {});
  },
};
