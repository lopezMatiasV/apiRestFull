const express = require('express');
const router = express.Router()
const { all } = require('../controllers/usersController')

router
    .get('/', all)

module.exports = router;