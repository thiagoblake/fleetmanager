const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, serviceController.getAllServices);
router.get('/:id', verifyToken, serviceController.getServiceById);
router.post('/', verifyToken, serviceController.createService);
router.put('/:id', verifyToken, serviceController.updateService);
router.delete('/:id', verifyToken, serviceController.deleteService);

module.exports = router;
