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
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      login: '123@mail.ru',
      pass: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ivan',
      login: '123@bk.ru',
      pass: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Andrey',
      login: '1@mail.ru',
      pass: '123',
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
