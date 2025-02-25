const { Maintenance } = require('../models');

exports.getAllMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.findAll();
    res.json(maintenances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByPk(req.params.id);
    if (!maintenance) return res.status(404).json({ error: 'Manutenção não encontrada' });
    res.json(maintenance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMaintenance = async (req, res) => {
  try {
    const newMaintenance = await Maintenance.create(req.body);
    res.status(201).json(newMaintenance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByPk(req.params.id);
    if (!maintenance) return res.status(404).json({ error: 'Manutenção não encontrada' });
    await maintenance.update(req.body);
    res.json(maintenance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByPk(req.params.id);
    if (!maintenance) return res.status(404).json({ error: 'Manutenção não encontrada' });
    await maintenance.destroy();
    res.json({ message: 'Manutenção deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
