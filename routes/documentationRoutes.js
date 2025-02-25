const express = require('express');
const router = express.Router();
const documentationController = require('../controllers/documentationController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, documentationController.getAllDocumentations);
router.get('/:id', verifyToken, documentationController.getDocumentationById);
router.post('/', verifyToken, documentationController.createDocumentation);
router.put('/:id', verifyToken, documentationController.updateDocumentation);
router.delete('/:id', verifyToken, documentationController.deleteDocumentation);

module.exports = router;
