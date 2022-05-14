'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.STRING
      },
      // walletAddress: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: { model: 'Wallets', key: 'address' }
      //   },

      fullname: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Coins');
  }
};