const { Contract } = require('../model')
const { Op } = require('sequelize');

exports.getContractById = async (req)=>{
    const profileId = req.profile.id;
    const contract = await Contract.findOne({
        where: {
            id: req.params.id,
            [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }],
        }
    })
    return contract;
}

exports.getNonTerminatedUserContracts = async (req) => {
    const profileId = req.profile.id;
    const contracts = await Contract.findAll({
        where: {
            [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }],
            status: {
              [Op.ne]: 'terminated',
            }
        }
    });
    return contracts;
}