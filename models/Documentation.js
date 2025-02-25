const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Documentation = sequelize.define('Documentation', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  vehicleId: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  documentNumber: { type: DataTypes.STRING, allowNull: false },
  expirationDate: { type: DataTypes.DATE, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Documentation;
