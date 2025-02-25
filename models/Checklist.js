const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Checklist = sequelize.define('Checklist', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  serviceId: { type: DataTypes.INTEGER, allowNull: false },
  checklistItems: { type: DataTypes.JSON, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'incomplete' },
}, {
  timestamps: true,
});

module.exports = Checklist;
