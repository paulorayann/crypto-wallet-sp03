'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Coins.belongsTo(models.Wallets, {
      //   foreignKey: 'walletCoins'
      // })
      // Coins.belongsTo(models.Transactions,{
      //   foreignKey: 'transCoins'
      // })
      // Coins.hasMany(models.Transactions, {
      //   foreignKey: 'coinTrans'
      // })
    }
  }
  Coins.init({
      idCoin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};