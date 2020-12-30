'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Plugas', [
      {
        id:1,
        pluga_name:'פלוגת נמרים',
        unit_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Golani_tree_color.svg/800px-Golani_tree_color.svg.png'
    },
    {
      id:2,
      pluga_name:'פלוגת פלסים',
      unit_image: 'https://upload.wikimedia.org/wikipedia/he/thumb/b/b2/SemelHandasaKravit-transparent.png/1024px-SemelHandasaKravit-transparent.png'
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Plugas', null, {});
  }
};
