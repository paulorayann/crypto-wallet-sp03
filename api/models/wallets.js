const moment = require("moment");

'use strict';
const {
  Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Wallets.hasMany(models.Coins, {
      //   foreignKey: 'walletCoins'
      // })
      // Wallets.hasMany(models.Transactions,{
      //   foreignKey: 'walletTrans'
      // })
  }
  }
  Wallets.init({
    address: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notEmpty: true,
      len:{args: [ 7 ],
      msg: 'Name must have at least 7 characters'}
    }
    },
    
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        validCPF: function(value) {
          if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value)){
            throw new Error('CPF must be valid')
          }
        }
      }
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: true,
        isDate: true,
        isBefore:"2004-01-01",
        validAge() {
          moment(Wallets.birthDate, "DD/MM/YYYY").format("YYYY-MM-DD")},
      }
    }
  }, {
    sequelize,
    modelName: 'Wallets',
  })
  return Wallets;
};