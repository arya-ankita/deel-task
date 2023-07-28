const router = require('express').Router();
const AdminController = require('../controllers/admin.controller');

router.get('/best-profession', AdminController.bestProfession);

module.exports = router;