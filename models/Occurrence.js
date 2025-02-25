const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Occurrence = sequelize.define('Occurrence', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  serviceId: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  occurredAt: { type: DataTypes.DATE, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Occurrence;
