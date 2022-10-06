const express = require('express');
const router = express.Router()
const { all } = require('../controllers/storagesController')

router
    .get('/', all)

module.exports = router;