const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, maintenanceController.getAllMaintenances);
router.get('/:id', verifyToken, maintenanceController.getMaintenanceById);
router.post('/', verifyToken, maintenanceController.createMaintenance);
router.put('/:id', verifyToken, maintenanceController.updateMaintenance);
router.delete('/:id', verifyToken, maintenanceController.deleteMaintenance);

module.exports = router;
