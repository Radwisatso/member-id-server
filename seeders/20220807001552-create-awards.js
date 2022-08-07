'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Awards', [
      {
        name: 'Gift card IDR 1.000.000',
        type: 'Vouchers',
        point: 500000,
        image: 'https://bit.ly/3vK2hoN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gift card IDR 500.000',
        type: 'Vouchers',
        point: 250000,
        image: 'https://bit.ly/3p385pH',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Old Fashion Cake',
        type: 'Products',
        point: 100000,
        image: 'https://bit.ly/3JyPtHv',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fried Chicken',
        type: 'Products',
        point: 75000,
        image: 'https://bit.ly/3df1eGM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gift Box',
        type: 'Products',
        point: 80000,
        image: 'https://bit.ly/3p0wDzu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Awards', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
