'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Transactions.hasMany(models.Coins,{
      //   foreignKey: 'coinId'
      // })
    }
  }
  Transactions.init({
    idTransaction: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    value: DataTypes.DOUBLE,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.INTEGER,
    receiveFrom: DataTypes.INTEGER,
    currentCotation: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};