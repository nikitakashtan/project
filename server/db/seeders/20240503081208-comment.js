'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Comments', [
    {
      user_id: 1,
      candidate_id: 1,
      name: 'Крутой',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      candidate_id: 2,
      name: 'Крутой',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      candidate_id: 3,
      name: 'Крутой',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      candidate_id: 4,
      name: 'Крутой',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
