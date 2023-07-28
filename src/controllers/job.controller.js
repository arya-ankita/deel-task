const JobService = require('./../services/job.service');
const httpStatus = require('http-status');

exports.getUnpaidJobs = async (req, res) => {
    try {
        const unpaidJobs = await JobService.getUnpaidJobs(req);
        if(!unpaidJobs){
            res.sendStatus(httpStatus.NOT_FOUND);
        }
        res.status(200).json({
            status: 'success',
            message: "List of all unpaid jobs",
            data: unpaidJobs
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

exports.payForJob = async (req, res) => {
    try {
        const response = await JobService.payForJob(req);
        if (response == '') {
          res.status(httpStatus.NOT_FOUND);
    
        } else if (typeof response === 'string' && response.includes('No paid found for this job')) {
          res.status(httpStatus.CONFLICT).json({ message: `No paid found for this job` });
          
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Pay For Job',
                data:  response
            })
        //  res.status(httpStatus.OK).json({ message: response });
        }
    
        
    } catch (error) {
        console.log("======ERROR=========", error);
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}