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
      img: 'https://da-mart.ru/storage/catalog/goods/324cef16d0893e1b3ab39bccba6cac9c.w700h700.jpg',
      user_id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Помидоры',
      img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614570782_26-p-pomidor-na-belom-fone-33.jpg',
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
      img: 'https://da-mart.ru/storage/catalog/goods/324cef16d0893e1b3ab39bccba6cac9c.w700h700.jpg',
      user_id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Помидоры',
      img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614570782_26-p-pomidor-na-belom-fone-33.jpg',
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
      img: 'https://da-mart.ru/storage/catalog/goods/324cef16d0893e1b3ab39bccba6cac9c.w700h700.jpg',
      user_id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Помидоры',
      img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614570782_26-p-pomidor-na-belom-fone-33.jpg',
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
