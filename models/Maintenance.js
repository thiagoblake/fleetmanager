const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Maintenance = sequelize.define('Maintenance', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  vehicleId: { type: DataTypes.INTEGER, allowNull: false },
  maintenanceType: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  scheduledDate: { type: DataTypes.DATE, allowNull: false },
  completedDate: { type: DataTypes.DATE, allowNull: true },
  cost: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
}, {
  timestamps: true,
});

module.exports = Maintenance;
