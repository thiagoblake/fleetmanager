const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FuelingRecord = sequelize.define('FuelingRecord', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  vehicleId: { type: DataTypes.INTEGER, allowNull: false },
  fuelingDate: { type: DataTypes.DATE, allowNull: false },
  liters: { type: DataTypes.FLOAT, allowNull: false },
  cost: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
}, {
  timestamps: true,
});

module.exports = FuelingRecord;
