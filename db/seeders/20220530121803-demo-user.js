const bcrypt = require('bcrypt');

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

    const pass = bcrypt.hashSync('123', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      login: '123@mail.ru',
      pass,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ivan',
      login: '123@bk.ru',
      pass,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Andrey',
      login: '1@mail.ru',
      pass,
      isAdmin: true,
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
