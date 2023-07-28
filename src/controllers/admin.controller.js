const AdminService = require('./../services/admin.service');
const httpStatus = require('http-status');

exports.bestProfession=async(req,res)=>{
    try{
        const bestProfession = await AdminService.bestProfession(req);
        if (!bestProfession) {
          res.status(httpStatus.NOT_FOUND).json({ message: 'No best profession found' });
        }
        res.status(200).json({
            status:'success',
            message: 'Best Profession',
            data:bestProfession
        })
    }catch(error){
        res.status(400).json({
            status:'fail',
            message: error
        })
    }
}