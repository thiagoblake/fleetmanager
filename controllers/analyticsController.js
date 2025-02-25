const { Vehicle, Maintenance, FuelingRecord } = require('../models');

exports.getDashboardData = async (req, res) => {
  try {
    const totalVehicles = await Vehicle.count();
    const totalMaintenances = await Maintenance.count();
    const totalFuelCost = await FuelingRecord.sum('cost');

    res.json({ totalVehicles, totalMaintenances, totalFuelCost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
