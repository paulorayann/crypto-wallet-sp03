'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coins', {
      idCoin: {
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
      // walletCoins:{
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: { model: 'Wallets', key: 'id' }
      // },
      // transCoins:{
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: { model: 'Transactions', key: 'id' }
      // },
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