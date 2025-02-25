const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  model: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  licensePlate: { type: DataTypes.STRING, allowNull: false, unique: true },
  chassisNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
  fuelType: { type: DataTypes.STRING, allowNull: false },
  acquisitionDate: { type: DataTypes.DATE, allowNull: false },
  depreciation: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  currentMileage: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
}, {
  timestamps: true,
});

module.exports = Vehicle;
