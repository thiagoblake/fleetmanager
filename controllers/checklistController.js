const { Checklist } = require('../models');

exports.getAllChecklists = async (req, res) => {
  try {
    const checklists = await Checklist.findAll();
    res.json(checklists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getChecklistById = async (req, res) => {
  try {
    const checklist = await Checklist.findByPk(req.params.id);
    if (!checklist) return res.status(404).json({ error: 'Checklist não encontrado' });
    res.json(checklist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createChecklist = async (req, res) => {
  try {
    const newChecklist = await Checklist.create(req.body);
    res.status(201).json(newChecklist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateChecklist = async (req, res) => {
  try {
    const checklist = await Checklist.findByPk(req.params.id);
    if (!checklist) return res.status(404).json({ error: 'Checklist não encontrado' });
    await checklist.update(req.body);
    res.json(checklist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteChecklist = async (req, res) => {
  try {
    const checklist = await Checklist.findByPk(req.params.id);
    if (!checklist) return res.status(404).json({ error: 'Checklist não encontrado' });
    await checklist.destroy();
    res.json({ message: 'Checklist deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
