const express = require('express')

const router = express.Router()
const getDocuments = require('../controllers/query.controller.js');

router.get('/:sec/:field/:filter',getDocuments)

module.exports = router