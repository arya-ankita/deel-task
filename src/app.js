const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./model')
const {getProfile} = require('./middleware/getProfile')
const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)
const contractRoute = require('./routes/contract.route');
const jobRoute = require('./routes/job.route');
const AdminRoute = require('./routes/admin.route');
/**
 * FIX ME!
 * @returns contract by id
 */
// app.get('/contracts/:id',getProfile ,async (req, res) =>{
//     const {Contract} = req.app.get('models')
//     const {id} = req.params
//     const contract = await Contract.findOne({where: {id}})
//     if(!contract) return res.status(404).end()
//     res.json(contract)
// })

//Contracts Routes
app.use('/contracts',contractRoute);

// Jobs routes
app.use('/jobs',jobRoute)

// Admin routes
app.use('/admin', AdminRoute);

module.exports = app;
