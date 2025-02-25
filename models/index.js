const sequelize = require('../config/database');

const User = require('./User');
const Vehicle = require('./Vehicle');
const Documentation = require('./Documentation');
const FuelingRecord = require('./FuelingRecord');
const Maintenance = require('./Maintenance');
const Team = require('./Team');
const Service = require('./Service');
const Checklist = require('./Checklist');
const Occurrence = require('./Occurrence');

// Associação entre Veículo e Documentação
Vehicle.hasMany(Documentation, { foreignKey: 'vehicleId', as: 'documentations' });
Documentation.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

// Associação entre Veículo e Abastecimento
Vehicle.hasMany(FuelingRecord, { foreignKey: 'vehicleId', as: 'fuelingRecords' });
FuelingRecord.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

// Associação entre Veículo e Manutenção
Vehicle.hasMany(Maintenance, { foreignKey: 'vehicleId', as: 'maintenances' });
Maintenance.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

// Associação entre Equipe e Serviço
Team.hasMany(Service, { foreignKey: 'teamId', as: 'services' });
Service.belongsTo(Team, { foreignKey: 'teamId', as: 'team' });

// Associação entre Veículo e Serviço
Vehicle.hasMany(Service, { foreignKey: 'vehicleId', as: 'services' });
Service.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

// Associação entre Serviço e Checklist
Service.hasOne(Checklist, { foreignKey: 'serviceId', as: 'checklist' });
Checklist.belongsTo(Service, { foreignKey: 'serviceId', as: 'service' });

// Associação entre Serviço e Ocorrências
Service.hasMany(Occurrence, { foreignKey: 'serviceId', as: 'occurrences' });
Occurrence.belongsTo(Service, { foreignKey: 'serviceId', as: 'service' });

module.exports = {
  sequelize,
  User,
  Vehicle,
  Documentation,
  FuelingRecord,
  Maintenance,
  Team,
  Service,
  Checklist,
  Occurrence,
};
