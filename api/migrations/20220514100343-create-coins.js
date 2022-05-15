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

      walletId :{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Wallets', key: 'address' }
      },

      coin: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Coins');
  }
};