const ContractService = require('./../services/contract.service');
const httpStatus = require('http-status');

exports.getContractById = async (req, res) => {
    try {
        const contract = await ContractService.getContractById(req);
        if (!contract) {
            res.sendStatus(httpStatus.NOT_FOUND);
        }
        res.status(200).json({
            status: 'success',
            message: 'Contract Info',
            data: contract
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

exports.getNonTerminatedUserContracts = async (req, res) => {
    try {
        const contracts = await ContractService.getNonTerminatedUserContracts(req);
        if (!contracts) {
            res.sendStatus(httpStatus.NOT_FOUND);
        }
        res.status(200).json({
            status: 'success',
            message: 'List of all non-terminated Contracts',
            data: contracts
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}
