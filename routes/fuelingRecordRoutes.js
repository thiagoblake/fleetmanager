const express = require('express');
const router = express.Router();
const fuelingRecordController = require('../controllers/fuelingRecordController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, fuelingRecordController.getAllFuelingRecords);
router.get('/:id', verifyToken, fuelingRecordController.getFuelingRecordById);
router.post('/', verifyToken, fuelingRecordController.createFuelingRecord);
router.put('/:id', verifyToken, fuelingRecordController.updateFuelingRecord);
router.delete('/:id', verifyToken, fuelingRecordController.deleteFuelingRecord);

module.exports = router;
