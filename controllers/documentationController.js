const { Documentation } = require('../models');

exports.getAllDocumentations = async (req, res) => {
  try {
    const docs = await Documentation.findAll();
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDocumentationById = async (req, res) => {
  try {
    const doc = await Documentation.findByPk(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Documento não encontrado' });
    res.json(doc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDocumentation = async (req, res) => {
  try {
    const newDoc = await Documentation.create(req.body);
    res.status(201).json(newDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDocumentation = async (req, res) => {
  try {
    const doc = await Documentation.findByPk(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Documento não encontrado' });
    await doc.update(req.body);
    res.json(doc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDocumentation = async (req, res) => {
  try {
    const doc = await Documentation.findByPk(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Documento não encontrado' });
    await doc.destroy();
    res.json({ message: 'Documento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
