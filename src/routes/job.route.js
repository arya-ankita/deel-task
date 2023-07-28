const router = require('express').Router();
const jobsController = require('../controllers/job.controller');
const { getProfile } = require('../middleware/getProfile');

router.get('/unpaid', getProfile, jobsController.getUnpaidJobs);
router.post('/:job_id/pay', getProfile, jobsController.payForJob);

module.exports = router;