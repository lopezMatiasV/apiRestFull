const express = require('express');
const router = express.Router()
const {upload} = require('../utils/handleStorage')
const { getItems, createItem, getItem } = require('../controllers/storagesController')

router
    .get('/', getItems)
    .get('/:id', getItem)
    .post('/', upload.single('myfile'), createItem)

module.exports = router;