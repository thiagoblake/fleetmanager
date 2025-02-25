const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, checklistController.getAllChecklists);
router.get('/:id', verifyToken, checklistController.getChecklistById);
router.post('/', verifyToken, checklistController.createChecklist);
router.put('/:id', verifyToken, checklistController.updateChecklist);
router.delete('/:id', verifyToken, checklistController.deleteChecklist);

module.exports = router;
