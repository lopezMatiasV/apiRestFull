const express = require('express');
const router = express.Router()
const { all } = require('../controllers/tracksController')

router
    .get('/', all)

module.exports = router;