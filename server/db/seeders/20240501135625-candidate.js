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
    await queryInterface.bulkInsert('Canditates', [
      {
        name: 'Candidate 1',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 2',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 3',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 4',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 4,
        stage_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 5',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 6',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 7',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 8',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candidate 9',
        email: '1@1',
        phone: '132',
        zoom: 'mik_a',
        skype: 'NIK_1',
        hh: 'DDGF',
        experience: 3,
        stage_id: 9,
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
