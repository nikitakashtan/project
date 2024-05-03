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
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        phone: "1112223333",
        zoom: "michael_johnson_zoom",
        skype: "michael_johnson_skype",
        hh: "michael_johnson_hh",
        experience: 4,
        stage_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "9876543210",
        zoom: "jane_smith_zoom",
        skype: "jane_smith_skype",
        hh: "jane_smith_hh",
        experience: 7,
        stage_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "5555555555",
        zoom: "alice_johnson_zoom",
        skype: "alice_johnson_skype",
        hh: "alice_johnson_hh",
        experience: 3,
        stage_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        phone: "1112223333",
        zoom: "michael_johnson_zoom",
        skype: "michael_johnson_skype",
        hh: "michael_johnson_hh",
        experience: 4,
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Emily Brown",
        email: "emily.brown@example.com",
        phone: "4445556666",
        zoom: "emily_brown_zoom",
        skype: "emily_brown_skype",
        hh: "emily_brown_hh",
        experience: 6,
        stage_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "David Lee",
        email: "david.lee@example.com",
        phone: "7778889999",
        zoom: "david_lee_zoom",
        skype: "david_lee_skype",
        hh: "david_lee_hh",
        experience: 2,
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sarah Smith",
        email: "sarah.smith@example.com",
        phone: "1112223333",
        zoom: "sarah_smith_zoom",
        skype: "sarah_smith_skype",
        hh: "sarah_smith_hh",
        experience: 5,
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Daniel Wilson",
        email: "daniel.wilson@example.com",
        phone: "4445556666",
        zoom: "daniel_wilson_zoom",
        skype: "daniel_wilson_skype",
        hh: "daniel_wilson_hh",
        experience: 7,
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Noah Martinez",
        email: "noah.martinez@example.com",
        phone: "1112223333",
        zoom: "noah_martinez_zoom",
        skype: "noah_martinez_skype",
        hh: "noah_martinez_hh",
        experience: 6,
        stage_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Olivia Garcia",
        email: "olivia.garcia@example.com",
        phone: "7778889999",
        zoom: "olivia_garcia_zoom",
        skype: "olivia_garcia_skype",
        hh: "olivia_garcia_hh",
        experience: 3,
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Emma Johnson",
        email: "emma.johnson@example.com",
        phone: "1112223333",
        zoom: "emma_johnson_zoom",
        skype: "emma_johnson_skype",
        hh: "emma_johnson_hh",
        experience: 4,
        stage_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "4445556666",
        zoom: "michael_brown_zoom",
        skype: "michael_brown_skype",
        hh: "michael_brown_hh",
        experience: 8,
        stage_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ava Wilson",
        email: "ava.wilson@example.com",
        phone: "7778889999",
        zoom: "ava_wilson_zoom",
        skype: "ava_wilson_skype",
        hh: "ava_wilson_hh",
        experience: 6,
        stage_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "William Taylor",
        email: "william.taylor@example.com",
        phone: "1112223333",
        zoom: "william_taylor_zoom",
        skype: "william_taylor_skype",
        hh: "william_taylor_hh",
        experience: 3,
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sophia Martinez",
        email: "sophia.martinez@example.com",
        phone: "4445556666",
        zoom: "sophia_martinez_zoom",
        skype: "sophia_martinez_skype",
        hh: "sophia_martinez_hh",
        experience: 7,
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "James Anderson",
        email: "james.anderson@example.com",
        phone: "7778889999",
        zoom: "james_anderson_zoom",
        skype: "james_anderson_skype",
        hh: "james_anderson_hh",
        experience: 5,
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Isabella Thomas",
        email: "isabella.thomas@example.com",
        phone: "1112223333",
        zoom: "isabella_thomas_zoom",
        skype: "isabella_thomas_skype",
        hh: "isabella_thomas_hh",
        experience: 4,
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "David Moore",
        email: "david.moore@example.com",
        phone: "4445556666",
        zoom: "david_moore_zoom",
        skype: "david_moore_skype",
        hh: "david_moore_hh",
        experience: 6,
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mia Jackson",
        email: "mia.jackson@example.com",
        phone: "7778889999",
        zoom: "mia_jackson_zoom",
        skype: "mia_jackson_skype",
        hh: "mia_jackson_hh",
        experience: 3,
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Logan White",
        email: "logan.white@example.com",
        phone: "1112223333",
        zoom: "logan_white_zoom",
        skype: "logan_white_skype",
        hh: "logan_white_hh",
        experience: 7,
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
