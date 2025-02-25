const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, teamController.getAllTeams);
router.get('/:id', verifyToken, teamController.getTeamById);
router.post('/', verifyToken, teamController.createTeam);
router.put('/:id', verifyToken, teamController.updateTeam);
router.delete('/:id', verifyToken, teamController.deleteTeam);

module.exports = router;
