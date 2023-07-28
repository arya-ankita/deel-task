const router = require('express').Router();
const contractsController = require('../controllers/contract.controller');
const { getProfile } = require('../middleware/getProfile');

router.get('/:id',getProfile, contractsController.getContractById);
router.get('', getProfile, contractsController.getNonTerminatedUserContracts);

module.exports = router;