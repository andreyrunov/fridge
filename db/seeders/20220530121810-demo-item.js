module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Items', [{
      name: 'Хлеб',
      img: 'https://ecoland.kg/wp-content/uploads/2020/05/686de3a9-c883-11e9-8859-d5b49e03d8cb_IMG_4245.jpeg',
      user_id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Огурцы',
      img: 'https://w7.pngwing.com/pngs/487/795/png-transparent-armenian-cucumber-vegetable-fruit-cucumber-slices-and-cucumber-natural-foods-leaf-vegetable-food.png',
      user_id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Помидоры',
      img: 'https://e7.pngegg.com/pngimages/273/923/png-clipart-cherry-tomato-tomato-soup-high-definition-television-tomato-natural-foods-food.png',
      user_id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Хлеб',
      img: 'https://ecoland.kg/wp-content/uploads/2020/05/686de3a9-c883-11e9-8859-d5b49e03d8cb_IMG_4245.jpeg',
      user_id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Огурцы',
      img: 'https://w7.pngwing.com/pngs/487/795/png-transparent-armenian-cucumber-vegetable-fruit-cucumber-slices-and-cucumber-natural-foods-leaf-vegetable-food.png',
      user_id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Помидоры',
      img: 'https://e7.pngegg.com/pngimages/273/923/png-clipart-cherry-tomato-tomato-soup-high-definition-television-tomato-natural-foods-food.png',
      user_id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Хлеб',
      img: 'https://ecoland.kg/wp-content/uploads/2020/05/686de3a9-c883-11e9-8859-d5b49e03d8cb_IMG_4245.jpeg',
      user_id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Огурцы',
      img: 'https://w7.pngwing.com/pngs/487/795/png-transparent-armenian-cucumber-vegetable-fruit-cucumber-slices-and-cucumber-natural-foods-leaf-vegetable-food.png',
      user_id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Помидоры',
      img: 'https://e7.pngegg.com/pngimages/273/923/png-clipart-cherry-tomato-tomato-soup-high-definition-television-tomato-natural-foods-food.png',
      user_id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Items', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {});
  },
};
