const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/fleetdb', {
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
