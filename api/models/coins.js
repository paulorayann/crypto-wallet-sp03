'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {

    static associate(models) {

      Coins.hasMany(models.Transactions, {
        foreignKey: 'coinId'
      })
      Coins.belongsTo(models.Wallets, {
        foreignKey: 'walletId'
      })

    }

  }
  Coins.init({
  id: {
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
    timestamps: false,
    modelName: 'Coins',
  });
  return Coins;
};