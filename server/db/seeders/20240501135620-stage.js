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

    queryInterface.bulkInsert('Stages', [
      {
        name: 'Новые',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Отправлено письмо-приглашение',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Назначен звонок-скрининг',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Назначено видеоинтервью',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Передано заказчику',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Назначено интервью с заказчиком',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Выставлен оффер',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Принял оффер и вышел на работу',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Отказ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
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
