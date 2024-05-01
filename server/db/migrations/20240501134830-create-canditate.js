'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Canditates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      zoom: {
        type: Sequelize.STRING
      },
      skype: {
        type: Sequelize.STRING
      },
      hh: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stages',
          key: 'id',
        }, 
        onDelete: 'CASCADE',   
      },  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Canditates');
  }
};