const { Occurrence } = require('../models');

exports.getAllOccurrences = async (req, res) => {
  try {
    const occurrences = await Occurrence.findAll();
    res.json(occurrences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOccurrenceById = async (req, res) => {
  try {
    const occurrence = await Occurrence.findByPk(req.params.id);
    if (!occurrence) return res.status(404).json({ error: 'Ocorrência não encontrada' });
    res.json(occurrence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOccurrence = async (req, res) => {
  try {
    const newOccurrence = await Occurrence.create(req.body);
    res.status(201).json(newOccurrence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOccurrence = async (req, res) => {
  try {
    const occurrence = await Occurrence.findByPk(req.params.id);
    if (!occurrence) return res.status(404).json({ error: 'Ocorrência não encontrada' });
    await occurrence.update(req.body);
    res.json(occurrence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOccurrence = async (req, res) => {
  try {
    const occurrence = await Occurrence.findByPk(req.params.id);
    if (!occurrence) return res.status(404).json({ error: 'Ocorrência não encontrada' });
    await occurrence.destroy();
    res.json({ message: 'Ocorrência deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
