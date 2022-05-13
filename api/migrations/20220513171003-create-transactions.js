'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      idTransaction: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DOUBLE
      },
      // walletTrans:{
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: { model: 'Wallets', key: 'address' }
      // },
      // coinTrans:{
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: { model: 'Coins', key: 'idTransaction' }
      // },
      datetime: {
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.INTEGER
      },
      receiveFrom: {
        type: Sequelize.INTEGER
      },
      currentCotation: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Transactions');
  }
};