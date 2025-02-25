-- Dropar tabelas existentes (na ordem correta para evitar conflitos de chave estrangeira)
DROP TABLE IF EXISTS Occurrences;
DROP TABLE IF EXISTS Checklists;
DROP TABLE IF EXISTS Services;
DROP TABLE IF EXISTS Teams;
DROP TABLE IF EXISTS Maintenances;
DROP TABLE IF EXISTS FuelingRecords;
DROP TABLE IF EXISTS Documentations;
DROP TABLE IF EXISTS Vehicles;
DROP TABLE IF EXISTS Users;

-- Tabela de Usuários
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

-- Tabela de Veículos
CREATE TABLE Vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  model VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  licensePlate VARCHAR(50) NOT NULL UNIQUE,
  chassisNumber VARCHAR(100) NOT NULL UNIQUE,
  fuelType VARCHAR(50) NOT NULL,
  acquisitionDate DATE NOT NULL,
  depreciation DECIMAL(10,2),
  currentMileage INT NOT NULL DEFAULT 0,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

-- Tabela de Documentações
CREATE TABLE Documentations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicleId INT NOT NULL,
  type VARCHAR(100) NOT NULL,
  documentNumber VARCHAR(100) NOT NULL,
  expirationDate DATE NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (vehicleId) REFERENCES Vehicles(id) ON DELETE CASCADE
);

-- Tabela de Registros de Abastecimento
CREATE TABLE FuelingRecords (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicleId INT NOT NULL,
  fuelingDate DATE NOT NULL,
  liters FLOAT NOT NULL,
  cost DECIMAL(10,2) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (vehicleId) REFERENCES Vehicles(id) ON DELETE CASCADE
);

-- Tabela de Manutenções
CREATE TABLE Maintenances (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicleId INT NOT NULL,
  maintenanceType VARCHAR(100) NOT NULL,
  description TEXT,
  scheduledDate DATE NOT NULL,
  completedDate DATE,
  cost DECIMAL(10,2),
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (vehicleId) REFERENCES Vehicles(id) ON DELETE CASCADE
);

-- Tabela de Equipes
CREATE TABLE Teams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

-- Tabela de Serviços
CREATE TABLE Services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  teamId INT NOT NULL,
  vehicleId INT NOT NULL,
  serviceDate DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (teamId) REFERENCES Teams(id) ON DELETE CASCADE,
  FOREIGN KEY (vehicleId) REFERENCES Vehicles(id) ON DELETE CASCADE
);

-- Tabela de Checklists
CREATE TABLE Checklists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  serviceId INT NOT NULL,
  checklistItems JSON NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'incomplete',
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (serviceId) REFERENCES Services(id) ON DELETE CASCADE
);

-- Tabela de Ocorrências
CREATE TABLE Occurrences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  serviceId INT NOT NULL,
  description TEXT NOT NULL,
  occurredAt DATE NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (serviceId) REFERENCES Services(id) ON DELETE CASCADE
);
