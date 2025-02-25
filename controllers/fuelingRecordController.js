const { FuelingRecord } = require('../models');

exports.getAllFuelingRecords = async (req, res) => {
  try {
    const records = await FuelingRecord.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFuelingRecordById = async (req, res) => {
  try {
    const record = await FuelingRecord.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'Registro de abastecimento não encontrado' });
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createFuelingRecord = async (req, res) => {
  try {
    const newRecord = await FuelingRecord.create(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFuelingRecord = async (req, res) => {
  try {
    const record = await FuelingRecord.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'Registro de abastecimento não encontrado' });
    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFuelingRecord = async (req, res) => {
  try {
    const record = await FuelingRecord.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'Registro de abastecimento não encontrado' });
    await record.destroy();
    res.json({ message: 'Registro de abastecimento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
