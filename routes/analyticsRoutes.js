const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/dashboard', verifyToken, analyticsController.getDashboardData);

module.exports = router;
