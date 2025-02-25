const express = require('express');
const router = express.Router();
const occurrenceController = require('../controllers/occurrenceController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, occurrenceController.getAllOccurrences);
router.get('/:id', verifyToken, occurrenceController.getOccurrenceById);
router.post('/', verifyToken, occurrenceController.createOccurrence);
router.put('/:id', verifyToken, occurrenceController.updateOccurrence);
router.delete('/:id', verifyToken, occurrenceController.deleteOccurrence);

module.exports = router;
