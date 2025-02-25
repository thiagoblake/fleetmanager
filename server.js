require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

// Importação das rotas
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const documentationRoutes = require('./routes/documentationRoutes');
const fuelingRecordRoutes = require('./routes/fuelingRecordRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const teamRoutes = require('./routes/teamRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const checklistRoutes = require('./routes/checklistRoutes');
const occurrenceRoutes = require('./routes/occurrenceRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/documentations', documentationRoutes);
app.use('/api/fueling-records', fuelingRecordRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/checklists', checklistRoutes);
app.use('/api/occurrences', occurrenceRoutes);
app.use('/api/analytics', analyticsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
